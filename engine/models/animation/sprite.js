const Sprite = function(params){

  this.properties = {
    context: params.context,
    width: params.width,
    height: params.height,
    image: params.image
  };


}

Sprite.prototype = {

  draw: function(){
    console.log("drawing to canvas");
    console.log(this.properties.image);
    console.log(this.properties.context);
    this.properties.context.drawImage(
      this.properties.image,
      0,
      0,
      this.properties.width,
      this.properties.height,
      0,
      0,
      this.properties.width,
      this.properties.height
      );
    console.log("finnished drawing")
  }

}

module.exports = Sprite;