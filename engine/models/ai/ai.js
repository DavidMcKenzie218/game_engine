const Ai = function(animation){

  this.animation = animation;
  this.playerLocation = 0;
  this.enemyLocation = 0;

}

Ai.prototype = {

  choice: function(){
    return rng = Math.ceil(Math.random() * 5);
  },

  setPlayerLocation: function(location){
    if(location > this.playerLocation){
      let difference = location - this.playerLocation;
      this.playerLocation += difference;
    }else if(location < this.playerLocation){
      let difference = this.playerLocation - location;
      this.playerLocation -= difference;
    }
    
  },

  setEnemyLocation: function(location){
    if(location > this.enemyLocation){
      let difference = location - this.enemyLocation;
      this.enemyLocation += difference;
    }else if(location < this.enemyLocation){
      let difference = this.enemyLocation - location;
      this.enemyLocation -= difference;
    }
  }

}

module.exports = Ai;