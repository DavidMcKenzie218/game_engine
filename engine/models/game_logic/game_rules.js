const GameRules = function(){

  this.isWinner = false;
  this.winner = null;

}

GameRules.prototype = {

  reset: function(){
    this.isWinner = false;
    this.winner = null;
  },

  setWinner: function(player){
    this.isWinner = true;
    this.winner = player;
  }

}

module.exports = GameRules;