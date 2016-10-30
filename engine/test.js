const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js')

const keyListeners = function(player, enemy){
  window.onkeydown = function(event){
    window.requestAnimationFrame(function(){
      if(event.keyCode === 68){
        player.updateSprite(3, "walk");
      }else if(event.keyCode === 65){
        player.updateSprite(-3, "walk");
      }else if(event.keyCode === 80){
        player.updateSprite(0, "punch");
      }else if (event.keyCode === 72){
        player.updateSprite(0, "damage");
      }else if (event.keyCode === 79){
        player.updateSprite(0, "double punch");
      }else if (event.keyCode === 81){
        player.updateSprite(0, "block");
      }
      player.drawSprite();
    })
    
  }

  
  window.onkeyup = function(){
    player.resetSprite();
  }

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

  playerAnim.makeSprite();
  enemyAnim.makeSprite();


  keyListeners(playerAnim, enemyAnim);
}


window.onload = test;