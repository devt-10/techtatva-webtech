//require modules
// const express = require('express');
// // const { resolvePackageData } = require('vite');
// const app = express()
// const router = express.Router({ mergeParams: true });
// const userRoutes = require('./routes/users')
// // const methodOverride = require('method-override')
// const eventRoutes = require('./routes/events');
// const { default: mongoose } = require('mongoose');
// const path=require('path')
//replace the above require with import
import express from 'express';
// import { resolvePackageData } from 'vite';
const app = express();
const router = express.Router({ mergeParams: true });
import userRoutes from './routes/users.js'
// import methodOverride from 'method-override'
import eventRoutes from './routes/events.js';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path'
// const path=require('path')


//middleware
app.set('view engine','ejs')
// app.set('views',path.join(__dirname,"views"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(methodOverride("_method"));
app.use('/', userRoutes)
app.use('/', eventRoutes)


mongoose.connect("mongodb://127.0.0.1:27017/tech-tatva", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});




app.get('/', (req, res) => {
    res.send("Home Page!")
})





app.all("*", (req, res, next) => {
    // next(new ExpressError("Page Not Found", 404));
    res.send('404!!')
    next();
});


app.use((err, req, res, next) => {
    // res.send('Something went wrong')
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    // console.log(err);
    res.status(statusCode).send({ err });
});

app.listen(3000, (req, res) => {
    console.log('SERVING ON 3000!')
})