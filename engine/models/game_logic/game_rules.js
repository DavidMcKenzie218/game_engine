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
  },

  checkForWinner: function(){
    let beaten = false;
    for(let i = 0; i < this.players.length; i++){
      let health = this.checkHealth(i);
      if(health === 0){
        beaten = true;
      }
    }
    return beaten;
  }

}

module.exports = GameRules;