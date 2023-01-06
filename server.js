const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

//.env in cofig folder
require("dotenv").config({path: './config/.env'});

//connect to database

connectDB();


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running dumb fast yo!${process.env.PORT}`);
})