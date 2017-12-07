var connStat = "closed";
var connection = require("./connection");  //ref to the connection to poloniex
var stock = require("./data/stock");  //ref to the connection to poloniex
var tickTimer = 5000; //update every 5 seconds
var stocks = {};
var clone = require('clone');
var poloniex;

/**
	update market data every n seconds and
	refresh all objects connected to the data
*/
function parseStats(tickData) {
console.log("-->(stockStats.js/updateMarketData)");

	//parse the data
	for (var key in tickData) {
    if (tickData.hasOwnProperty(key)) {
        /* useful code here */
				console.log(key + ":" + JSON.stringify(tickData[key]));
				if(stocks[key] == undefined) {
					stocks[key] = clone(stock); //create new object
				}
				stocks[key].setData(key, tickData[key]);
    }
	}
}

module.exports = {
	startListening : function() {
		console.log("-->(stockStats.js/startListening)");
		poloniex = connection.open();
	},

  /**
		async function which sends a callback call after
		market data has been successfully parsed and stored
	*/
	updateMarketData: function (callbackOnCompleted) {
		console.log("-->(stockStats.js/updateMarketData)");
		poloniex.returnTicker((err, ticker) => {
				if (err) {
					console.log(err.message);
				} else {
					parseStats(ticker);
					callbackOnCompleted();
				}
			});
	},

	getAllStats : function() {
		console.log("-->(stockStats.js/getAllStats)");
		return {
			marketData : marketData,
			tickerEvent : tickerData,
			trollboxData : trollboxData
		};
	}
};
