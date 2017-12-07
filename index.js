//initializes the whole game
var gameContrl = require('./modules/gameContrl');

/**
    EXPRESS HTTP
*/
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send(stockStats.getAllStats()));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
