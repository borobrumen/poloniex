var marketData = "";
var tickerData = "";
var trollboxData = "";
var connStat = "closed";
var connection = require("./connection");

var updateStatsListener = {
	marketEvent : function  (args,kwargs) {
            console.log(args);
            marketData = args;
    },
    tickerEvent : function (args,kwargs) {
            console.log(args);
            tickerData = args;
    },
    trollboxEvent : function (args,kwargs) {
            console.log(args);
            trollboxData = args;
    }
}; 

module.exports = {
	startListening : function() {
		console.log("stockStats: startListening");
		connection.connect(updateStatsListener);
	},

	getAllStats : function() {
		console.log("stockStats: getAllStats");
		return {
			marketData : marketData, 
			tickerEvent : tickerData,
			trollboxData : trollboxData
		};
	}
};