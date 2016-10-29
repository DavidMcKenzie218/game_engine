const Canvas = require('./models/canvas.js');
const Animation = require('./models/animation/animationSpriteSheet.js')

const test = function(){
  const playSpace = new Canvas("#canvas-test");
  playSpace.create(700, 700);
  let anim = new Animation();
  anim.makeSprite();
  
}


window.onload = test;