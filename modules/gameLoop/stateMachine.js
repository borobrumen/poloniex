var state = ""; //current state
var states = { //available states
  "init": {name: "init", nextState: "tickStart"},
  "tickStart": {name: "tickStart", nextState: "updateMarketData"},
  "updateMarketData": {name: "updateMarketData", nextState: "tickEnd"},
  "tickEnd": {name: "end", nextState: "init"},
}

var stateChangedListener;

/**
  change state and notify all listeners
*/
function changeState(newState) {
  state = states[newState]; //set state to init
  stateChangedListener(state);
}

module.exports = {
  start: function(stateChangedListnr) {
    stateChangedListener = stateChangedListnr;
    changeState(states.init.name);
  },
  nextState: function() {
    changeState(state.nextState);
  },
  tick: function() {
    changeState(states.tickStart.name); //go to tick start state
  },
  states: states
}
