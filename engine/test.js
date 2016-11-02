const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js');
const Ai = require('./models/ai/ai.js');
const GameRules = require('./models/game_logic/game_rules.js');
const Boxer = require('./models/game_logic/boxer.js');
const Game = require('./models/game/game.js');

const keyListeners = function(player, enemy, ai, game){
  let id;
  
    window.onkeydown = function(event){
      if(!game.isWinner){
        id = window.requestAnimationFrame(function(){       
        if(event.keyCode === 68){
          player.updateSprite(3, "walk");
        }else if(event.keyCode === 65){
          player.updateSprite(-3, "walk");
        }else if(event.keyCode === 69){
          player.updateSprite(0, "punch");
          ai.isPunched(game);
        }else if (event.keyCode === 72){
          player.updateSprite(0, "damage");
        }else if (event.keyCode === 82){
          player.updateSprite(0, "double punch");
          ai.isPunched();
        }else if (event.keyCode === 81){
          player.updateSprite(0, "block");
          ai.playerBlocked(true);
        }
        enemy.drawSprite();
        player.drawSprite();
      
    });
      }
  }
  

  window.onkeyup = function(){
    player.resetSprite();
    enemy.resetSprite();
    ai.playerBlocked(false);
  }

}

const gameLoop = function(game){
  game.loop(0)
}


const gameOver = function(game){
  console.log("-----GAME OVER------");
  console.log(game.winner, " is the winner");
}

const setup = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const enemyImage = "./images/CharSheetIT.png";

  const player = new Boxer("player");
  const enemy = new Boxer("enemy");

  const gameRules = new GameRules();
  gameRules.addPlayer(player);
  gameRules.addPlayer(enemy);

  console.log(gameRules.players);

  const playSpace = new Canvas("#canvas-test");
  const enemyPlayeSpace = new Canvas("#canvas-enemy");
  enemyPlayeSpace.create(700, 700, "enemy-canvas");
  playSpace.create(700, 700, "player-canvas");  

  let playerAnim = new Animation(playerImage, 0, 10, "#player-canvas");
  let enemyAnim = new Animation(enemyImage, 500, 10, "#enemy-canvas");

  const playerParams = {
    width: 2304,
    height: 128,
    frameCount: 18,
    animFrames: {
      move: {
        start: 0,
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
        start: 0,
        end: 5
      },
      punch: {
        start: 5,
        end: 7
      }, 
      damage: {
        start: 1,
        end: 3
      }
    }
  };

  playerAnim.makeSprite(playerParams);
  enemyAnim.makeSprite(enemyParams);

  const ai = new Ai(enemyAnim);

  const game = new Game({playerAnim: playerAnim, enemyAnim: enemyAnim, ai: ai, gameRules: gameRules});

  keyListeners(playerAnim, enemyAnim, ai, gameRules);
  gameLoop(game);
}


window.onload = setup;