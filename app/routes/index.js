const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`
    <h1>WELCOME</h1>
    <p>Nixalar meetups put together artists from all walk of life.</p>
    `)
})

module.exports = router;