// import your node modules
const express = require('express');
const db = require('./data/db.js');

const server = express();
// add your server code starting here
server.listen(5000, () => {
    console.log('**Server running on port 5000**');
});

server.get('/api/posts', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json({ posts })
        })
        .catch(err => {
            res.status(500).json({ error: 'Problem retreiving data' })
        })
})

server.get('/api/posts/:id', (req, res) => {
    const postId = req.params.id;

    db.findById(postId)
        .then(post => {
            res.json({ post })
        })
        .catch(err => {
            res.status(500).json({ error: 'Problem retreiving data' })
        })
})