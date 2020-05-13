May 11, 2020

Learning Node JS + Express + Rest API

Next -> Authentication and Authorization using JWT

Procedures:

1.  Set up git
2.  Initialize npm
3.  Install express and nodemon
4.  Create app.js
5.  Modify package.json
6.  Set routes
7.  Listen to the server
8.  Connect to database Mongoose
    a. go to mlab.com
    b. create account and cluster
    c. create db user and password
    mongolloyd
    code1234 9. Install dotenv to store db username and password 10. Create router folder 11. Create model folder 12. Install body-parser

====================================================================
Codes
git init
npm init
npm install express nodemon
"scripts": {
"start": "nodemon app.js"
},

    app.get('/', (req, res) => {
        res.send('Hello Node + Express');
    });

    app.listen(3000);

    npm install dotenv

    npm start

    npm i body-parser - this is necessary when getting inputs

====================================================================
Study tommorrow Promise and Async Javascript
// a promise is something like a promise in real-life
// it has two results , resolve or reject

// promises is similar to callbacks
// callback were the functions that were executed by itself
====================================================================

Just discovered:
#Ignore pushing files
touch .gitignore
FILE_NAME ex. node_modules

====================================================================
Notes:
In production, if api and front-end is going to deploy in not the same server.
Expect error: Access-Control-Allow-Origin

To solve: install cors - npm install cors
add the middleware
got to app.js
add app.use(cors);
====================================================================

Other notes:
Get images from pexels.com and
Optimize photos using drop tinypng.com
Designing website use figma

VS Codes Extensions
Material Theme and Icon
Better Comments
Prettier
Live Server
File on save set to true
