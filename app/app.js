/*** creating server using express ***/
var express = require('express');
var app = express();
app.get('/',(req, res)=>{
    res.send('<h1>Nixalar meetup</h1>')
})

var server = app.listen(3000, ()=>console.log('go to http://localhost:3000 on your browser'))





/*** creating server using http ***/

// var http = require('http')

// var myServer = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write('<h1>Nixalar Meetups</h1>')
//     res.end();
// });

// myServer.listen(3000)
// console.log('go to http://localhost:3000 on your browser')