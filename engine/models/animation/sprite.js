const Sprite = function(params){

  this.properties = {
    context: params.context,
    width: params.width,
    height: params.height,
    image: params.image,
    loop: params.loop,
    xCoord: params.xStart
  };

  this.animFrames = params.animFrames;

  this.tickCount = 0;                           //Current frame from the frame rate
  this.ticksPerFrame = params.ticksPerFrame;    //Frame rate
  this.frameIndex = 0;                          //Current Frame
  this.numberOfFrames = params.numberOfFrames;  //Number of frames in the animation
  this.punch = false;
  this.damage = false;


}

Sprite.prototype = {

  resetBooleans: function(){
    this.punch = false;
    this.damage  = false;
    this.properties.loop = true;
    this.frameIndex = 0;
    this.numberOfFrames = 18;
    this.properties.width = 2304;
    this.tickCount = 0;
    this.update(0);
    this.draw();
  },

  draw: function(){
    this.properties.context.clearRect(
      0,
      10,
      (128 + this.properties.xCoord),
      this.properties.height
      );

    this.properties.context.drawImage(
      this.properties.image,
      this.frameIndex * this.properties.width / this.numberOfFrames,
      0,
      this.properties.width / this.numberOfFrames,
      this.properties.height,
      this.properties.xCoord,
      10,
      this.properties.width / this.numberOfFrames,
      this.properties.height
      );
  },

  updateWalk: function(direction){
    this.numberOfFrames = this.animFrames.move.end;
    this.properties.width = 128 * this.animFrames.move.end; 
    this.properties.xCoord +=direction;
    this.update(0)
    
  }, 

  updatePunch: function(type){
    console.log("updating punch frame");
    let endFrame = this.animFrames.punch.end;
    if(type === "double punch") {
      endFrame = this.animFrames.doublePunch.end;
    }
    if(!this.punch){
      console.log("punch selected and frames set")
      this.numberOfFrames = endFrame;
        this.frameIndex = this.animFrames.punch.start;
        this.properties.width = 128 * endFrame;
        this.punch = true;
      }
    this.update(this.animFrames.punch.start); 
  },

  updateDamage: function(){
    console.log("taking damage")
    if(!this.damage){
      this.properties.loop = false;
      this.numberOfFrames = this.animFrames.damage.end;
      this.frameIndex = this.animFrames.damage.start;
      this.properties.width = 128 * this.animFrames.damage.end;
      this.damage = true;
    }
    this.update(this.animFrames.damage.start);
  },

  updateBlock: function(frameStart, frameLimit){
    this.numberOfFrames = this.animFrames.block.end;
    this.frameIndex = this.animFrames.block.start;
    this.properties.width = 128 * this.animFrames.block.end;
    this.update(this.animFrames.block.start);
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