const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <h1>WELCOME</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height:300px;"/>
    <p>Nixalar meetups put together artists from all walk of life.</p>
    `)
})

module.exports = router;