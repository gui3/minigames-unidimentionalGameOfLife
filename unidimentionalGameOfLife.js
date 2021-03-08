// module template from moment.js

(function (global, factory) {
  let define
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : global.unidimentionalGameOfLife = factory()
}(this, function () { // ----------------------------

  var defaultOptions = { // default options

    // minigames options
    width: "700px",
    gameHeight: "400px",
    fontFamily: "sans-serif",
    frontColor: "#222222",
    backColor: 0,
    showBorder: false,
    terminalHeight: "150px",
    terminalMaxLines: 30,
    showTerminal: true,
    messagePrefix: ">> "
  }
// game logic:
  function setupLogic(id, events, options) {

    

    return {
      toggleCell,
      
    }
  }


  function newGame (minigamesLib, target, options) {
    if (!minigamesLib || !minigamesLib.processOptions) {
      throw new Error(
        "unidimentionalGameOfLife: no valid minigames.js library,"
        +" please add it")
    }
    var options = minigamesLib.processOptions(options, defaultOptions)
    var minigame = minigamesLib.new(target, options)

    var events = minigame.events
    var id = minigame.id
    var ui = minigame.ui

    var logic = setupLogic(id, events, options)
    var ui = setupUi(id, minigame.ui, logic, events, options)

    return {
      id,
      ui,
      logic,
      events
    }
  }

  return {
    new: newGame
  }
}))