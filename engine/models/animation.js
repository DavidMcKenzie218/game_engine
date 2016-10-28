const Animation = function(){

  this.playerSprites = [];
  this.enemySprites = [];

}

Animation.prototype = {

  addPlayerSprites: function(sprites, action){
    this.playerSprites.push({action: action, sprites: sprites});
  },

  addEnemySprites: function(sprites, action, enemy){
    this.enemySprites.push({enemy: enemy, action: action, sprites: sprites})
  }

}

module.exports = Animation;