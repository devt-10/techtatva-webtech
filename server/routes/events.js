const express = require('express');
const app = express();
const router = express.Router();

router.get('/events', (req, res) => {
    res.send('Hello from the events route!')
})

module.exports = router;