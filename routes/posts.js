const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('All Posts');
});
    
// router.post('/', (req, res) => {
//     //console.log(req.body);
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//         .then( data => {
//             res.json(data);
//         })
//         .catch(err => { 
//             res.status(400).send("unable to save to database");
//         });
// });

router.post('/', async (req, res) => {
    //console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savePost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
    
});

// router.get('/', (req, res) => {
//     res.send('All Posts');
// });

// router.get('/post1', (req, res) => {
//     res.send('Post 1');
// });

module.exports = router;