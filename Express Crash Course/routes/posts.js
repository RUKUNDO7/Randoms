import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';
const router = express.Router();

// let posts = [
//     {id:1, title: 'Post One'},
//     {id:2, title: 'Post Two'},
//     {id:3, title: 'Post Three'}
//] // declared using let to allow overwriting

// Get all posts
// router.get('/', (req, res, next) => {
//     const limit = parseInt(req.query.limit);
//     if(!isNaN(limit) && limit > 0) {
//        return res.status(200).json(posts.slice(0, limit));
//     }
//      res.status(200).json(posts);     
// })

router.get('/', getPosts);

// Get single post
// router.get('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//         const error = new Error( `A post with the id ${id} was not found`);
//         error.status = 404;
//         return next(error);
//      } 
//          res.status(200).json(post);
//  })

router.get('/:id', getPost);

    // if (!post) {
    //    return res.status(404).json({message: `A post with the id ${id} was not found`})
    // } 
    //     res.status(200).json(post);
//})

// Create a new post
// router.post('/', (req, res, next) => {
//     //console.log('BODY', req.body);
//     // console.log('Received body:', req.body);
//     const newPost = {
//         id: posts.length + 1,
//         title: req.body.title
//     }

//     // if(!newPost.title) {
//     //    return res.status(400).json({message: 'Please include a title'}); 
//     // }
//     // posts.push(newPost);

//     if (!newPost.title) {
//        const error = new Error(`Please include a title`);
//        error.status = 400;
//        return next(error);
//      }
//      posts.push(newPost);
//      res.status(201).json(posts);
// })

router.post('/', createPost);

// Update a post
// router.put('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//        const error = new Error(`A post with the id of ${id} was not found`);
//        error.status = 404;
//        return next(error);
//      } 

//     post.title = req.body.title;
//     res.status(200).json(posts); 
// });

router.put('/:id', updatePost);

// Delete a post
// router.delete('/:id', (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id);

//     if (!post) {
//         const error = new Error(`A post with the id of ${id} was not found`);
//         error.status = 404;
//         return next(error);
        
//      } 

//     posts = posts.filter((post) => post.id !== id);
//     res.status(200).json(posts); 
// });

router.delete('/:id', deletePost);


export default router;
