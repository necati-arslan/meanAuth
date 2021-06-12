
const express = require('express');
const bodyParser = require('body-parser');

const api = require('./routes/api')
const app = express();


app.use(bodyParser.json()); 

app.use('/api',api);

app.get('/',function(req,res){
    res.send('server is ok')
})


const port = 3000;


app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});