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
    this.name = pair_name;
    this.last = Number(dataObj["last"]);
    this.lowestAsk = Number(dataObj["lowestAsk"]);
    this.highestBid = Number(dataObj["highestBid"]);
    this.percentChange = Number(dataObj["percentChange"]);
    this.baseVolume = Number(dataObj["baseVolume"]);
    this.quoteVolume = Number(dataObj["quoteVolume"]);
    this.isFrozen = Boolean(dataObj["isFrozen"]);
    this.high_24h = Number(dataObj["high24hr"]);
    this.low_24h = Number(dataObj["low24hr"]);
  }
}
