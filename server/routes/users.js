// const express = require('express');
// const app = express();
// const router = express.Router();
// const User=require('../models/user')
//replace the above require with import
import express from 'express';
const app = express();
const router = express.Router();
import User from '../models/user.js'


router.get('/users/new', async(req, res) => {
    // res.send('Hello from the user route!')
    const user=User.insertOne(req.body);
})
router.get('/users/:id', async(req, res) => {
    // res.send('Hello from the user route!')
    const {id}=req.params;
    const user=await User.findById(id);
    res.render('profile',{user});
    // res.send(user);
})

// module.exports = router
export default router;