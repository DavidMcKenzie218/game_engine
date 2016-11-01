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

  findBoxerIndex: function(id){
    let index = this.players.findIndex(function(boxer){
      return boxer.id === id;
    })
    return index;
  },

  checkHealth: function(index){
    return this.players[index].health;
  },

  checkForWinner: function(){
    let beaten = false;
    let winner;
    for(let i = 0; i < this.players.length; i++){
      let health = this.checkHealth(i);
      if(health > 0){
        winner = this.players[i];
      }
      if(health === 0){
        beaten = true;
        this.setWinner(winner);
      }
    }
    return beaten;
  },

  playerAttackPlayer: function(index){
    let damage = this.players[index].attackDamage;
    for(var i = 0; i < this.players.length; i++){
      if(i != index){
        this.players[i].takeDamage(damage);
        console.log(this.players)
      }
    }
  }

}

module.exports = GameRules;