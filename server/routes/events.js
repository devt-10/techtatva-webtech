// const express = require('express');
const app = express();
const router = express.Router();
// const Event=require('../models/event')

//replace the above require with import
import express from 'express';
// import app from 'express';
// import router from 'express';
import Event from '../models/event.js';


router.get('/events', (req, res) => {
    res.send('Hello from the events route!')
})

// module.exports = router;
export default router;