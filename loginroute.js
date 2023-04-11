const express = require('express');
const router = express.Router();
const data = require('./middel')

router.post('/login', data,(req, res) => {
    res.send(req.body.name)
})
module.exports = router;