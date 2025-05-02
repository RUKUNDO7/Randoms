import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8000;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// // setup static folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/posts', posts);

// Error Handling middleware
app.use(notFound);
app.use(errorHandler);

// // app.get('/', (req, res) => {
// //     res.send('Hello world');
// // });

// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// // });

// // // app.get('/about', (req, res) => {
// // //     res.send('About');
// // // });

// // app.get('/about', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// // });

// let posts = [
//     {id:1, title: 'Post One'},
//     {id:2, title: 'Post Two'},
//     {id:3, title: 'Post Three'}
// ]
// //Get all posts   
// // app.get('/api/posts', (req, res) => {
// //      res.json(posts);
// // })

// // app.get('/api/posts', (req, res) => {
// //     const limit = parseInt(req.query.limit);
// //     if(!isNaN(limit) && limit > 0) {
// //         res.status(200).json(posts.slice(0, limit));
// //     } else {
// //         res.status(200).json(posts);
// //     }    
// // })

// app.get('/api/posts', (req, res) => {
//     const limit = parseInt(req.query.limit);
//     if(!isNaN(limit) && limit > 0) {
//        return res.status(200).json(posts.slice(0, limit));
//     }
//      res.status(200).json(posts);
        
// })

// //Get single post
// // app.get('/api/posts/:id', (req, res) => {
// //     const id = parseInt(req.params.id);
// //     res.status(200).json(posts.filter((post) => post.id === id));
// // })

// // app.get('/api/posts/:id', (req, res) => {
// //     const id = parseInt(req.params.id);
// //     const post = posts.find((post) => post.id === id);
// //     if (!post) {
// //         res.status(404).json({message: `A post with the id ${id} was not found`})
// //     } else {
// //         res.status(200).json(post);
// //     }
// // })

// app.get('/api/posts/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);
//     if (!post) {
//        return res.status(404).json({message: `A post with the id ${id} was not found`})
//     } 
//         res.status(200).json(post);
// })

app.listen(port, () => console.log(`Server is running on port ${port}`));
 