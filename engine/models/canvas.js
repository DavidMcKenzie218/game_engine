const Canvas = function(id){
  this.container = document.querySelector(id);
}

Canvas.prototype = {

  create: function(x, y){

    let canvas = document.createElement("canvas");
    canvas.width = x;
    canvas.height = y;
    let body = document.querySelector('body');
    body.appendChild(canvas);
  }

}

module.exports = Canvas;