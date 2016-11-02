const Game = function(params){
  this.player = params.playerAnim;
  this.enemy = params.enemyAnim;
  this.gameRules = params.game;
  this.ai = params.ai;

  console.log(params)
}

module.exports = Game;