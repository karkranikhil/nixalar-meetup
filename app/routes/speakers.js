const express = require('express');
const router = express.Router();
 
router.get('/speakers',(req, res)=>{
    let info = '';
    /*Fetching data from app.js using get*/
    let dataFile = req.app.get('appData');
    dataFile.speakers.forEach(item => {
        info +=`
        <li>
            <h2>${item.name}</h2>
            <img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker"/>
            <p>${item.summary}</p>
        </li>
        `
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    <h1>Nixalar meetup</h1>
    ${info}`)
})

router.get('/speakers/:speakerid',(req, res)=>{
    let dataFile = req.app.get('appData');
    let speaker = dataFile.speakers[req.params.speakerid]
     res.send(`
     <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    <h1>Nixalar meetup</h1>
     <h1>${speaker.title}</h1>
     <h2>${speaker.name}</h2>
     <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker"/>
     <h3>${speaker.summary}</h3>
    `)
 })
 

 module.exports = router;