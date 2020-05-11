May 11, 2020

Learning Node JS + Express + Rest API

Next -> Authentication and Authorization using JWT



Procedures:
   1. Set up git
   2. Initialize npm
   3. Install express and nodemon 
   4. Create app.js
   5. Modify package.json
   6. Set routes
   7. Listen to the server
   8. Connect to database Mongoose
            a. go to mlab.com
            b. create account and cluster
            c. create db user and password
                    mongolloyd
                    code1234
    9. Install dotenv to store db username and password
    10. Create router folder
    11. Create model folder
    12. Install body-parser
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

    npm i body-parser


Study tommorrow Promise and Async Javascript
