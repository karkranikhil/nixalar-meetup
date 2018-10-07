/*** creating server using express ***/
const express = require('express');
const app = express();
const dataFile = require('./data/data.json')

/*set port number based on environment variable */
app.set('port', process.env.PORT || 3000);
/*set dataFile to appData and availble throughout our application */
app.set('appData', dataFile)

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));


const server = app.listen(app.get('port'), ()=>console.log('go to http://localhost:'+app.get('port')+ ' on your browser'))





/*** creating server using http ***/

// var http = require('http')

// var myServer = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.write('<h1>Nixalar Meetups</h1>')
//     res.end();
// });

// myServer.listen(3000)
// console.log('go to http://localhost:3000 on your browser')