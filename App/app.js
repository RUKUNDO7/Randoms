import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import article from './models/article.js';
import mongoose from 'mongoose';
import { ExpressValidator } from 'express-validator';
import flash from 'connect-flash';
import session from 'express-session';

//Connect to MongoDB
mongoose.connect('mongodb://localhost/node');
let db = mongoose.connection;

//Check for DB connection
db.once('open', () => {
    console.log('Connected to MongoDB');
})

//Check for DB errors
db.on('error', (err) => {
    console.log(err);
})

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

// Bring in models
let Article = article;

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// let articles = [
//     {
//         id: 1,
//         title: 'Article One',
//         author: 'John'
//     },
//     {
//         id: 2,
//         title: 'Article Two',
//         author: 'Jack'
//     },
//     {
//         id: 3,
//         title: 'Article One',
//         author: 'Jane'
//     }
// ]

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUnitialized: true,
    cookie: { secure: true }
}))

//Express Messages Middleware
app.use(require('connect-flash')());
app.use((req, res, next) => {
    res.locals.messages = require('express-messages')(req,res);
    next();
})

// Express Validator Middleware
app.use(ExpressValidator({
    errorFormatter: (param, msg, value) => {
        var namespace = param.split('.') 
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg, 
            value : value
        }
    }
}))

app.get('/', async (req, res) => {
    try {
        const articles = await Article.find({});
        res.render('index', { activePage: 'home', articles }); // Pass articles to the view
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
});
    // res.render('index', {
    //     articles: articles
    // });

// Get Single Article
app.get('/article/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.render('article', { article }); // Pass the article object to the view
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});
 

app.get('/articles/add', (req,res) => {
        res.render('add_article', {
        })
    })

    //Add Submit POST Route
    // app.post('/articles/add', (req, res) =>{
    //     console.log('Submitted');
    // })
app.post('/articles/add', async (req, res) => {
        try {
            let article = new Article();
            article.title = req.body.title;
            article.author = req.body.author;
            article.body = req.body.body;
    
            await article.save(); // Use async/await instead of a callback
            res.redirect('/');
            req.flash('success', 'Article Added')
        } catch (err) {
            console.log('Error saving article:', err);
            res.status(500).send('Failed to save the article');
        }
});

//Load Edit Form
app.get('/article/edit/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.render('edit_article', { article }); // Pass the article object to the view
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});


app.listen(3000, () => {console.log('Server started!')})