const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

poloniex.on('open', () => {
  console.log(`Poloniex WebSocket connection open`);
});

poloniex.on('close', (reason, details) => {
  console.log(`Poloniex WebSocket connection disconnected`);
});

poloniex.on('error', (error) => {
  console.log(`An error has occured`);
});

module.exports = {
  open: function(){
    console.log("-->(connection.js/connect) ");
    poloniex.openWebSocket();

    return poloniex;
  }
}
