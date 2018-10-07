/*** creating server using express ***/
var express = require('express');
var app = express();
var dataFile = require('./data/data.json')

/*set port number based on environment variable */
app.set('port', process.env.PORT || 3000);
app.get('/',(req, res)=>{
    var info = '';
    dataFile.speakers.forEach(item => {
        info +=`
        <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
        </li>
        `
    });
    res.send(`
    <h1>Nixalar meetup</h1>
    ${info}`)
})

var server = app.listen(app.get('port'), ()=>console.log('go to http://localhost:'+app.get('port')+ ' on your browser'))





/*** creating server using http ***/

// var http = require('http')

// var myServer = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write('<h1>Nixalar Meetups</h1>')
//     res.end();
// });

// myServer.listen(3000)
// console.log('go to http://localhost:3000 on your browser')