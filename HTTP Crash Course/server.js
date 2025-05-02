const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());//JSON data parser
app.use(express.urlencoded({ extended: false}));// Form data parser

// app.get('/', (req, res) => {
//     res.send('Hello From Express');
// });

// app.post('/contact', (req, res) => {
//     res.send(req.body.name);
// });

// app.post('/contact', (req, res) => {
//     if (!req.body.name) {
//         return res.status(400).send('Name is required');
//     }

    //DATABASE STUFF
    //res.status(201).send(`Thank you ${req.body.name}`);
//})

// app.post('/Login', (req, res) => {
//     if(!req.header('x-auth-token')) {
//         return res.status(400).send('No Token');
//     }

//     if(req.header('x-auth-token') !== '123456') {
//         return res.status(401).send('Not authorized');
//     }

//     res.send("Logged In");
// })

// app.put('/post/:id', (req, res) => {
//     //DATABASE STUFF

//     res.json({
//         id: req.params.id,
//         title: req.body.title
//     });
// });
app.delete('/post/:id', (req, res) => {
    //DATABASE STUFF

    res.json({ msg: `Post ${req.params.id} deleted`});
});
app.listen(5000, () => console.log(`Server started on 5000`));