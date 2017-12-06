var connStat = "closed";
var connection = require("./connection");  //ref to the connection to poloniex
var tickTimer = 5000; //update every 5 seconds

function updateMarketData(tickData) {
console.log("-->(stockStats.js/updateMarketData)");

	//parse the data
	for (var key in tickData) {
    if (tickData.hasOwnProperty(key)) {
        /* useful code here */
				console.log(key + ":" + JSON.stringify(tickData[key]));
    }
	}
}

/**
	makes a tick every n seconds and updates the stock market data
*/
function startTickLoop(poloniex) {
	console.log("-->(stockStats.js/startTickLoop)");
	(function tick() {
		poloniex.returnTicker((err, ticker) => {
			if (err) {
				console.log(err.message);
			} else {
				updateMarketData(ticker);
			}
		});
		//call again
		setTimeout(tick, tickTimer);
	})();
}

module.exports = {
	startListening : function() {
		console.log("-->(stockStats.js/startListening)");
		var poloniex = connection.open();
		startTickLoop(poloniex);
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
