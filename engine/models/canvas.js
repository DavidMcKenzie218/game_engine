const Canvas = function(id){
  this.container = document.querySelector(id);
}

Canvas.prototype = {

  create: function(x, y, id){
    let canvas = document.createElement("canvas");
    canvas.width = x;
    canvas.height = y;
    canvas.id = id;
    let container = document.querySelector('#canvas-test');
    container.appendChild(canvas);
    
  },

  setBackground: function(image){
    let background = new Image();
    background.src = image;
    background.onload = function(){
      console.log("loaded");
      console.log(background)
      let canvas = document.querySelector('#background-canvas')
      let context = canvas.getContext("2d");
      context.drawImage(background, 0, 0);
    }
  }

}

module.exports = Canvas;