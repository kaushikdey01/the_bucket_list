import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
// const express = require('express');
dotenv.config();
const app = express();


app.use('/posts',postRoutes)

dotenv.config({ path: './config.env'});
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = process.env.DATABASE;
const PORT = process.env.PORT ;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)) )
    .catch((error) => console.log(error.message) );

// mongoose.set('useFindAndModify', false); not used anymore


