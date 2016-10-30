const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js')

const keyListeners = function(animation){
  window.onkeydown = function(){
    window.requestAnimationFrame(function(){
      animation.updateSprite();
      animation.drawSprite();
    })
    
  }
}

const test = function(){
  const playSpace = new Canvas("#canvas-test");
  playSpace.create(700, 700);
  let anim = new Animation();
  anim.makeSprite();

  keyListeners(anim);
}


window.onload = test;