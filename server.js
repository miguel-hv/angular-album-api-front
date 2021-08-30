const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/kenjo-challenge-app'));

app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname + '/dist/kenjo-challenge-app/index.html')));

app.listen(process.env.PORT || 4200);