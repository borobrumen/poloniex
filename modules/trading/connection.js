/**

    POLONIEX API

*/
var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connStat = "closed";
var usListener;


var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});
 
connection.onopen = function (session) {
        connStat = "open";
        session.subscribe('BTC_XMR', usListener.marketEvent);
        session.subscribe('ticker', usListener.tickerEvent);
        session.subscribe('trollbox', usListener.trollboxEvent);
}
 
connection.onclose = function () {
  console.log("Websocket connection closed");
  connStat = "closed";
}

exports.connect = function(updateStatsListener){
    usListener = updateStatsListener;
    connection.open();
} 