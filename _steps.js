/**
 * 1. create a folder
 * 2. npm init -y
 * 3. npm i express cors mongodb dotenv
 * 4. npm install -g nodemon
 * 5. create index.js -
 * 
 *      const express = require('express');
 *      const cors = require('cors');
 *      require('dotenv').config();
 *      const port= process.env.PORT || 5000;
 *      const app = express();
 *      // middleware
 *      app.use(cors());
 *      app.use(express.json());
 *      app.get('/', (req, res)=>{
 *          res.send('Runing Genius server')
 *      });
 *      app.listen(port, ()=>{
 *          console.log('Listening to port:', port)
})
 * 
 *       and add package.json this - 
 *      "start": "node index.js",
 *      "start-dev": "nodemon index.js"
 *
 *-------------------------
 *    Create Atlas Account
 *-----------------------
 * 1. sign up google
 * 2. create cluster
 * 3. create a dbUser and password
 * 4. Network access --> ip address: allow all
 * database > Connect > code copy paste in index.js
 * 
 * -----------------
 * CRUD Operation
 * -----------------
 * 1. node mongodb CURD > Fundamentals
 * 2. create async run function
 * 
 * -----------------------------------------------------
 * Integrate sending data from client to server
 * -----------------------------------------------------
 * 1. Client side: create a form
 * 2. on submit get form data and create user object
 * 3. on server: create user POST method to receive data on the backend (use middleware)
 * 4. on client side: set fetch with POST, headers, body
 * 5. make sure you return a json from the POST API
 * 
 * --------------------------------
 *  LOAD data to the client side
 * --------------------------------
 * 1.create a get api server side
 * 2. create a qurey object
 * 3. collection.find(qurey)
 * 4. cursor.toArray()
 * 5. return the result
 * 6. from client useEffect and dispaly like you have done before
 * 
 * ---------------------
 *  DELETE USer
 * --------------------
 * 1.
 * 
*/