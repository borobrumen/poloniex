var stateMachine = require("./gameLoop/stateMachine");  //ref to the connection to poloniex
var loopTimeout = 5000; //loop ticker

/**
    Stock Stats
*/
var stockStats = require('./trading/stockStats');
//start listening to stock stats
stockStats.startListening();


function stateChanged(newState){
  switch (newState.name) {
    case stateMachine.states.init.name:
        console.log("stateChanged to init -->(gameContrl.js/stateChanged)");
        stateMachine.nextState();
      break;
      case stateMachine.states.tickStart.name:
          console.log("stateChanged to tickStart -->(gameContrl.js/stateChanged)");
          setTimeout(stateMachine.tick, loopTimeout); //define start of next tick
          stateMachine.nextState();
        break;
      case stateMachine.states.updateMarketData.name:
          console.log("stateChanged to updateMarketData -->(gameContrl.js/stateChanged)");
          stockStats.updateMarketData(stateMachine.nextState);
        break;
      case stateMachine.states.tickEnd.name:
            console.log("stateChanged to tickEnd -->(gameContrl.js/stateChanged)");
          break;
    default:

  }
}

stateMachine.start(stateChanged);
