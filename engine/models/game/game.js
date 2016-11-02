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
    
    console.log(counter)

    this.gameRules.checkForWinner();
    
    if(counter === 10){
      this.setPlayerPosition();
      this.ai.update(this.player, this.gameRules);
      this.enemy.drawSprite();
      this.player.drawSprite();

      counter = 0;    
    }
    id = window.requestAnimationFrame(() =>{
      // console.log(ticker)
      counter ++;
      this.loop(counter);
    });

     if(this.gameRules.isWinner){
       window.cancelAnimationFrame(id);
       this.gameOver(game);
     }
  },

  setPlayerPosition: function(){
    this.ai.setPlayerLocation(this.player.position);
    this.ai.setEnemyLocation(this.enemy.position);
  }

}

module.exports = Game;