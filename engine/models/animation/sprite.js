const Sprite = function(params){

  this.properties = {
    context: params.context,
    width: params.width,
    height: params.height,
    image: params.image,
    loop: params.loop
  };

  this.tickCount = 0;                           //Current frame from the frame rate
  this.ticksPerFrame = params.ticksPerFrame;    //Frame rate
  this.frameIndex = 0;                          //Current Frame
  this.numberOfFrames = params.numberOfFrames;  //Number of frames in the animation


}

Sprite.prototype = {

  draw: function(){
    console.log("drawing to canvas");
    console.log(this.properties.image);
    console.log(this.properties.context);
    this.properties.context.drawImage(
      this.properties.image,
      this.frameIndex * this.properties.width / this.numberOfFrames,
      0,
      this.properties.width / this.numberOfFrames,
      this.properties.height,
      0,
      0,
      this.properties.width / this.numberOfFrames,
      this.properties.height
      );
    console.log("finnished drawing")
  },

  update: function(){
    this.tickCount ++;

    if(this.tickCount > this.ticksPerFrame){
      this.tickCount = 0;
      if(this.frameIndex < numberOfFrames - 1){
        this.frameIndex ++;
      } else if(this.properties.loop){
        this.frameIndex = 0;
      }
    }
  }

}

module.exports = Sprite;