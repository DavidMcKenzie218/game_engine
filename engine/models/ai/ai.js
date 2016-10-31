const Ai = function(animation){

  this.animation = animation;
  this.playerLocation = 0;
  this.enemyLocation = 0;
  this.gettingAttackedCounter = 0;
  this.attackCounter =0;
  this.enemyChoice = this.choice();
  this.frameRate = 0;
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
    if(this.enemyLocation != (this.playerLocation + 50) && this.attackCounter === 0){
      this.moveTowardsPlayer();
    }

    let difference = (this.enemyLocation - this.playerLocation);

    if(difference === 47 || difference ===  53 || difference === 50 ){
      if(this.enemyChoice < 10){
        console.log("attack");
        player.updateSprite(0, "damage");
        this.animation.updateSprite(0, "punch");
        player.drawSprite()
        this.animation.drawSprite();
        this.attackCounter ++;
        if(this.attackCounter === 10){
          this.attackCounter = 0;
          this.enemyChoice = this.choice();
          player.resetSprite();
        }
      }
      if (this.frameRate === 30){
        this.enemyChoice = this.choice();
        this.frameRate = 0;
        this.animation.resetSprite();
        player.resetSprite();
        }
        this.frameRate ++;

      }
    }
  }

module.exports = Ai;