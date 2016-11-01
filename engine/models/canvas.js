const Canvas = function(id){
  this.container = document.querySelector(id);
  console.log(id)
}

Canvas.prototype = {

  create: function(x, y, id){

    let canvas = document.createElement("canvas");
    canvas.width = x;
    canvas.height = y;
    canvas.id = id;
    this.container.appendChild(canvas);
    
  }

}

module.exports = Canvas;