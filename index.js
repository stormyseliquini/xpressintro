const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.status(200).send('Hello World!');
});

app.get('/hello', function(req, res) {
    res.status(200).send('Hello....');
});

app.listen(3000, function() {
    console.log('The EXPRESS server is listening on port: 3000.')
})
