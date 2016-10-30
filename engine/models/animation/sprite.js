const Sprite = function(params){

  this.properties = {
    context: params.context,
    width: params.width,
    height: params.height,
    image: params.image,
    loop: params.loop,
    xCoord: 0
  };

  this.tickCount = 0;                           //Current frame from the frame rate
  this.ticksPerFrame = params.ticksPerFrame;    //Frame rate
  this.frameIndex = 0;                          //Current Frame
  this.numberOfFrames = params.numberOfFrames;  //Number of frames in the animation
  this.punch = false;
  this.damage = false


}

Sprite.prototype = {

  resetBooleans: function(){
    this.punch = false;
    this.damage  = false;
    this.properties.loop = true;
  },

  draw: function(){
    this.properties.context.clearRect(
      0,
      0,
      this.properties.width,
      this.properties.height
      );

    this.properties.context.drawImage(
      this.properties.image,
      this.frameIndex * this.properties.width / this.numberOfFrames,
      0,
      this.properties.width / this.numberOfFrames,
      this.properties.height,
      this.properties.xCoord,
      0,
      this.properties.width / this.numberOfFrames,
      this.properties.height
      );
  },

  updateWalk: function(direction, frameLimit){
    this.resetBooleans();
    this.numberOfFrames = frameLimit;
    this.properties.width = 128 * frameLimit; 
    this.properties.xCoord +=direction;
    this.update(0)
    
  }, 

  updatePunch: function(frameStart, frameLimit){
    if(!this.punch){
      this.numberOfFrames = frameLimit;
        this.frameIndex = frameStart;
        this.properties.width = 128 * frameLimit;
        this.punch = true;
      }
    this.update(frameStart); 
  },

  updateDamage: function(frameStart, frameLimit){
    if(!this.damage){
      this.properties.loop = false;
      this.numberOfFrames = frameLimit;
      this.frameIndex = frameStart;
      this.properties.width = 128 * frameLimit;
      this.damage = true;
    }
    this.update(frameStart);
  },

  update: function(frameStart){
    this.tickCount ++;
    if(this.tickCount > this.ticksPerFrame){
      this.tickCount = 0;
      if(this.frameIndex < this.numberOfFrames - 1){
        this.frameIndex ++;
      } else if(this.properties.loop){
        this.frameIndex = frameStart;
      } 
    }
  }

}

module.exports = Sprite;