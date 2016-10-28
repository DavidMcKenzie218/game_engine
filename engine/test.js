const Canvas = require('./models/canvas.js');

const test = function(){
  const playSpace = new Canvas("#canvas-test");
  playSpace.create(700, 700);
}

window.onload = test;