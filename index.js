
/**
    Stock Stats
*/
var stockStats = require('./modules/trading/stockStats');
//start listening to stock stats
stockStats.startListening();

/**

    EXPRESS HTTP

*/
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send(stockStats.getAllStats()));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
                       
