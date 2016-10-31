const Ai = function(animation){

  this.animation = animation;
  this.playerLocation = 0;
  this.enemyLocation = 0;
  this.gettingAttackedCounter = 0

}

Ai.prototype = {

  choice: function(){
    return rng = Math.ceil(Math.random() * 20);
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
  },

  isPunched: function(){
    
    if(this.enemyLocation === (this.playerLocation + 50)){
      this.gettingAttackedCounter ++;
      if(this.gettingAttackedCounter === 7){
        console.log("connected");  
        this.gettingAttackedCounter = 0;      
      }
    }
  },

  moveTowardsPlayer: function(){
    if(this.enemyLocation > (this.playerLocation + 50)){
      this.animation.updateSprite(-3, "walk");
    } else if(this.enemyLocation < (this.playerLocation + 50)){
      this.animation.updateSprite(3, "walk");
    }
  },

  update: function(player){
    if(this.enemyLocation != (this.playerLocation + 50)){
      this.moveTowardsPlayer();
    }

    let difference = (this.enemyLocation - this.playerLocation)

    if(difference === 47 ||difference ===  53){
      let enemyChoice = this.choice();
      if(enemyChoice < 5){
        console.log("attack");
        player.updateSprite(0, "damage");
      }
    }

  }
}

module.exports = Ai;