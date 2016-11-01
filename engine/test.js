const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js');
const Ai = require('./models/ai/ai.js');
const Game = require('./models/game_logic/game_rules.js');
const Boxer = require('./models/game_logic/boxer.js');

const keyListeners = function(player, enemy, ai, game){
    window.onkeydown = function(event){
      window.requestAnimationFrame(function(){
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
      }
      enemy.drawSprite();
      player.drawSprite();
    });
  }
  

  window.onkeyup = function(){
    player.resetSprite();
    enemy.resetSprite();
    gameLoop(player, enemy, ai)
  }

}

const gameLoop = function(player, enemy, ai, counter, game){
  let ticker = counter;
  window.requestAnimationFrame(function(){
    ticker ++;
    gameLoop(player, enemy, ai, ticker, game);
  }.bind(this));
  if(ticker === 10){
    setPlayerPosition(player.position, enemy.position, ai);
    ai.update(player, game);
    enemy.drawSprite();
    player.drawSprite();
    ticker = 0;    
  }
}

const setPlayerPosition = function(playerPosition, enemyPosition, ai){
  ai.setPlayerLocation(playerPosition);
  ai.setEnemyLocation(enemyPosition);
}

const setup = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const enemyImage = "./images/CharSheetIT.png";

  const player = new Boxer("player");
  const enemy = new Boxer("enemy");

  const game = new Game();
  game.addPlayer(player);
  game.addPlayer(enemy);

  console.log(game.players);

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

  playerAnim.makeSprite(playerParams);
  enemyAnim.makeSprite(enemyParams);

  const ai = new Ai(enemyAnim);

  keyListeners(playerAnim, enemyAnim, ai, game);
  gameLoop(playerAnim, enemyAnim, ai, 0, game)
}


window.onload = setup;