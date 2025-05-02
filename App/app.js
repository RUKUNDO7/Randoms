import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import article from './models/article.js';
import mongoose from 'mongoose';

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
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/', async (req, res) => {
    try {
        const articles = await Article.find({});
        res.render('index', {
            articles: articles
    }); 
    } catch (error) {
        console.log(error);
    }
})
    // res.render('index', {
    //     articles: articles
    // });

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
        } catch (err) {
            console.log('Error saving article:', err);
            res.status(500).send('Failed to save the article');
        }
    });




app.listen(3000, () => {console.log('Server started!')})