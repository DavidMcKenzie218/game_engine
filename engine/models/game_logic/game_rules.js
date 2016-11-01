const GameRules = function(){

  this.isWinner = false;
  this.winner = null;
  this.players = [];

}

GameRules.prototype = {

  reset: function(){
    this.isWinner = false;
    this.winner = null;
    this.players = [];
  },

  setWinner: function(player){
    this.isWinner = true;
    this.winner = player;
  },

  addPlayer: function(player){
    this.players.push(player);
  },

  checkHealth: function(index){
    return this.players[index].health;
  }

}

module.exports = GameRules;