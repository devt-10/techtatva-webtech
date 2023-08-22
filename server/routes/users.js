const express = require('express');
const app = express();
const router = express.Router();


router.get('/user', (req, res) => {
    res.send('Hello from the user route!')
})

module.exports = router;