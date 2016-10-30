const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js')

const keyListeners = function(animation){
  window.onkeydown = function(event){
    window.requestAnimationFrame(function(){
      if(event.keyCode === 68){
        animation.updateSprite(3, "walk");
      }else if(event.keyCode === 65){
        animation.updateSprite(-3, "walk");
      }else if(event.keyCode === 80){
        animation.updateSprite(0, "punch");
      }else if (event.keyCode === 72){
        animation.updateSprite(0, "damage")
      }else if (event.keyCode === 79){
        animation.updateSprite(0, "double punch")
      }
      
      animation.drawSprite();
    })
    
  }
}

const test = function(){
  const playerImage = "./images/CharSheetWalk.png";
  const playSpace = new Canvas("#canvas-test");
  playSpace.create(700, 700);
  let anim = new Animation(playerImage);
  anim.makeSprite();

  keyListeners(anim);
}


window.onload = test;