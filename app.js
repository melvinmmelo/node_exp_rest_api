const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Middlewares
    // Version 1
    // app.use('/posts', () => {
    //     console.log('Middleware');
    // });
    
    // Version 2
    // app.use(auth);


// create main route
app.get('/', (req, res) => {
    res.send('Hello Node + Express');
});

// connect to db
mongoose.connect(process.env.DB_CONNECTION,
                    { useNewUrlParser: true,
                        useUnifiedTopology: true },
                        console.log('YES'),
                ).catch( err => console.log(err));

// listen server
app.listen(3000);