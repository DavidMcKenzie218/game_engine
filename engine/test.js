const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js');
const Ai = require('./models/ai/ai.js');
const Game = require('./models/game_logic/game_rules.js');
const Boxer = require('./models/game_logic/boxer.js');

const game = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const enemyImage = "./images/CharSheetIT.png";

  const player = new Boxer("player");
  const enemy = new Boxer("enemy");

  this.game = new Game();
  this.game.addPlayer(player);
  this.game.addPlayer(enemy);

  const playerCanvas = new Canvas("#canvas-container");
  const enemyCanvas = new Canvas("#canvas-container");

  playerCanvas.create(700, 700, "player-canvas");
  enemyCanvas.create(700, 700, "enemy-canvas");

  console.log(this.game.players); 

  this.playerAnim = new Animation(playerImage, 0, 10, "#player-canvas");
  this.enemyAnim = new Animation(enemyImage, 500, 10, "#enemy-canvas");

  const playerParams = {
    width: 2304,
    height: 128,
    frameCount: 18,
    animFrames: {
      move: {
        start: 1,
        end: 3
      },
      punch: {
        start: 4,
        end: 9
      },
      doublePunch: {
        start: 4,
        end: 11
      }, 
      damage: {
        start: 11,
        end: 18
      },
      block: {
        start: 4,
        end: 5
      }
    }
  };

  const enemyParams = {
    width: 2300,
    height: 192,
    frameCount: 18,
    animFrames: {
      move: {
        start: 1,
        end: 5
      },
      punch: {
        start: 5,
        end: 7
      }, 
      damage: {
        start: 8,
        end: 11
      }
    }
  };

  this.playerAnim.makeSprite(playerParams);
  this.enemyAnim.makeSprite(enemyParams);

  this.ai = new Ai(this.enemyAnim);
}

game.prototype = {

  run: function(){
      

      this.keyListeners();
      this.gameLoop(0);
    
  },

  keyListeners: function(){
    let id;
    
      window.onkeydown = function(event){
        if(!this.game.isWinner){
          id = window.requestAnimationFrame(function(){       
          if(event.keyCode === 68){
            this.playerAnim.updateSprite(3, "walk");
          }else if(event.keyCode === 65){
            this.playerAnim.updateSprite(-3, "walk");
          }else if(event.keyCode === 69){
            this.playerAnim.updateSprite(0, "punch");
            this.ai.isPunched(this.game);
          }else if (event.keyCode === 72){
            this.playerAnim.updateSprite(0, "damage");
          }else if (event.keyCode === 82){
            this.playerAnim.updateSprite(0, "double punch");
            this.ai.isPunched();
          }else if (event.keyCode === 81){
            this.playerAnim.updateSprite(0, "block");
          }
          this.enemyAnim.drawSprite();
          this.playerAnim.drawSprite();
        
      });

          window.onkeyup = function(){
            this.playerAnim.resetSprite();
            this.enemyAnim.resetSprite();
          }
        }
  }


  

},
  gameLoop: function(counter, game){
    let id;
    let ticker = counter;

    this.game.checkForWinner();
    
    
    
    if(ticker === 10){
      this.setPlayerPosition();
      this.ai.update(this.playerAnim, this.game);
      this.enemyAnim.drawSprite();
      this.playerAnim.drawSprite();

      ticker = 0;    
    }
    id = window.requestAnimationFrame(() =>{
      ticker ++;
      this.gameLoop(this.playerAnim, this.enemyAnim, this.ai, ticker, this.game);
    });

     if(this.game.isWinner){
       window.cancelAnimationFrame(id);
       console.log(id)
       this.gameOver(this.game);
     }

  }, gameOver: function(){
    console.log("-----GAME OVER------");
    console.log(this.game.winner, " is the winner");
  },

  setPlayerPosition: function(){
    this.ai.setPlayerLocation(this.playerAnim);
    this.ai.setEnemyLocation(this.enemyAnim);
  }
}

module.exports = game;