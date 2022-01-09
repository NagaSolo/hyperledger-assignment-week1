'use strict'
require("dotenv").config();
const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const cors = require("cors");

/**
 * @constants
 * @setHostAt "0.0.0.0" instead or localhost
 */
const HOST = "0.0.0.0";
const PORT = 8485;

const app = express();
app.use(express.json())
const bodyParser = require("body-parser")
var corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000"
  };
app.use(cors(corsOptions));

console.log("DDDDD", process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @fetchOldData from the previous session
*/
app.get("/user", async (req, res) => {
    try {
        res.status(200).send({
            name: 'Lando',
            username: " lando12345",
            email: 'lando@lunixcooldev.com',
        })
    } catch(error) {
        res.status(500).send(error)
    }
});

/**
 * @getUsers endpoint - fetch data from our mongoDB 
 */
app.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

/**
 * @createUser endpoint - creates and appends the mongoDB
*/
app.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    })
    try {
      await user.save()
      res.status(201).send({user});
    //   res.status(201).json({user})
    } catch (error) {
      res.status(400).send(error)
    }
  }
);

/** 
* @listen 
*/
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});