const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel");

const SECRET_KEY = "super-secret-key";

// connect to express app
const app = express();

// connect to mongoDB
const dbURI =
  "mongodb+srv://safimohamed:x46Fykzg9ob8Oo3x@cluster30.jfpbatc.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Cluster30";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server connected to port 3001 and MongoDb");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Server and/or MongoDB", error);
  });
