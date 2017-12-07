module.exports = {
  name:"",
  last:0,
  lowestAsk:0,
  highestBid:0,
  percentChange:0,
  baseVolume:0,
  quoteVolume:0,
  isFrozen:0,
  high_24h:0,
  low_24h:0,

  setData: function(pair_name, dataObj) {
    try {
      this.name = pair_name;
      if(dataObj["last"] != undefined){
        this.last = Number(dataObj["last"]);
      }
      if(dataObj["lowestAsk"] != undefined){
        this.lowestAsk = Number(dataObj["lowestAsk"]);
      }
      if(dataObj["highestBid"] != undefined){
        this.highestBid = Number(dataObj["highestBid"]);
      }
      if(dataObj["percentChange"] != undefined){
        this.percentChange = Number(dataObj["percentChange"]);
      }
      if(dataObj["baseVolume"] != undefined){
        this.baseVolume = Number(dataObj["baseVolume"]);
      }
      if(dataObj["quoteVolume"] != undefined){
        this.quoteVolume = Number(dataObj["quoteVolume"]);
      }
      if(dataObj["isFrozen"] != undefined){
        this.isFrozen = Boolean(dataObj["isFrozen"]);
      }
      if(dataObj["high24hr"] != undefined){
        this.high_24h = Number(dataObj["high24hr"]);
      }
      if(dataObj["low24hr"] != undefined){
        this.low_24h = Number(dataObj["low24hr"]);
      }

    } catch (e) {
      console.console.warn("parsing error on: dataObj:" + dataObj + " -->(stock.js/setData)");
    }
  }
}
