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
    
  }

}

module.exports = Canvas;