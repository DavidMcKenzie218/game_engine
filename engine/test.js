const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js');
const Ai = require('./models/ai/ai.js');

const keyListeners = function(player, enemy, ai){
  window.onkeydown = function(event){
    window.requestAnimationFrame(function(){
      if(event.keyCode === 68){
        
        player.updateSprite(3, "walk");
      }else if(event.keyCode === 65){
        player.updateSprite(-3, "walk");
      }else if(event.keyCode === 69){
        player.updateSprite(0, "punch");
        ai.isPunched();
      }else if (event.keyCode === 72){
        player.updateSprite(0, "damage");
      }else if (event.keyCode === 82){
        player.updateSprite(0, "double punch");
      }else if (event.keyCode === 81){
        player.updateSprite(0, "block");
      }
      setPlayerPosition(player.position, enemy.position, ai);
      ai.update();
      enemy.drawSprite();
      player.drawSprite();
    })
    
  }

  window.onkeyup = function(){
    player.resetSprite();
    enemy.resetSprite();
  }

  ai.moveTowardsPlayer();

}

const setPlayerPosition = function(playerPosition, enemyPosition, ai){
  ai.setPlayerLocation(playerPosition);
  ai.setEnemyLocation(enemyPosition);
}

const test = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const enemyImage = "./images/CharSheetIT.png";

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
        end: 17
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
        start: 6,
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

  keyListeners(playerAnim, enemyAnim, ai);
}


window.onload = test;