const Game = function(params){
  this.player = params.playerAnim;
  this.enemy = params.enemyAnim;
  this.gameRules = params.gameRules;
  this.ai = params.ai;

  // console.log(params)
}

Game.prototype = {

  loop: function(counter){
    let id;

    this.gameRules.checkForWinner();
    
    if(counter === 10){
      this.setPlayerPosition();
      this.ai.update(this.player, this.gameRules);
      this.enemy.drawSprite();
      this.player.drawSprite();

      counter = 0;    
    }
    id = window.requestAnimationFrame(() =>{
      counter ++;
      this.loop(counter);
    });

     if(this.gameRules.isWinner){
       window.cancelAnimationFrame(id);
       this.gameOver(this.gameRules);
     }
  },

  setPlayerPosition: function(){
    this.ai.setPlayerLocation(this.player.position);
    this.ai.setEnemyLocation(this.enemy.position);
  },

  keyListeners: function(){
    let id;
    
      window.onkeydown = function(event){
        if(!this.gameRules.isWinner){
          id = window.requestAnimationFrame(function(){       
          if(event.keyCode === 68){
            this.player.updateSprite(3, "walk");
          }else if(event.keyCode === 65){
            this.player.updateSprite(-3, "walk");
          }else if(event.keyCode === 69){
            this.player.updateSprite(0, "punch");
            this.ai.isPunched(this.gameRules);
          }else if (event.keyCode === 72){
            this.player.updateSprite(0, "damage");
          }else if (event.keyCode === 82){
            this.player.updateSprite(0, "double punch");
            this.ai.isPunched();
          }else if (event.keyCode === 81){
            this.player.updateSprite(0, "block");
            this.ai.playerBlocked(true);
          }
          this.enemy.drawSprite();
          this.player.drawSprite();
        
      }.bind(this));
        }
    }.bind(this)
    
    window.onkeyup = function(){
      this.player.resetSprite();
      this.enemy.resetSprite();
      this.ai.playerBlocked(false);
    }.bind(this)

  }

}

module.exports = Game;