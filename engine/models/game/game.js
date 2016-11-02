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
    let ticker = counter;
    console.log(ticker)

    this.gameRules.checkForWinner();
    
    if(ticker === 10){
      // setPlayerPosition(this.player.position, this.enemy.position, this.ai);
      this.ai.update(this.player, this.gameRules);
      this.enemy.drawSprite();
      this.player.drawSprite();

      ticker = 0;    
    }
    id = window.requestAnimationFrame(() =>{
      console.log(ticker)
      ticker ++;
      this.loop(ticker);
    });

     if(this.gameRules.isWinner){
       window.cancelAnimationFrame(id);
       this.gameOver(game);
     }
  },

  setPlayerPosition: function(){
    
  }

}

module.exports = Game;