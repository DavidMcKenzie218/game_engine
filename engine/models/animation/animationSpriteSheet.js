const Sprite = require('./sprite.js');

const animationSpriteSheet = function(image, x, y, canvas){
  this.loaded = false;
  this.x = x;
  this.y = y;
  this.position = x;
  this.spriteSheet = new Image();
  this.spriteSheet.src = image; 
  console.log(this.spriteSheet);

  this.canvas = document.querySelector(canvas);
  console.log(canvas)
}

animationSpriteSheet.prototype = {

  resetSprite: function(){
    this.sprite.resetBooleans();
  },

  location: function(){
    return this.sprite.propertie.xCoord;
  },

  makeSprite: function(params){
    this.spriteSheet.onload = function(){
      this.loaded = true;
      console.log("loaded");
      this.sprite = new Sprite({
        context: this.canvas.getContext('2d'),
        width: params.width,
        height: params.height,
        image: this.spriteSheet,
        numberOfFrames: params.frameCount,
        ticksPerFrame: 1,
        loop: true,
        xStart: this.x,
        animFrames: params.animFrames
      });
      this.addSprite();
    }.bind(this)
  },

  addSprite: function(){
      this.spriteProps = this.sprite.properties;
      this.drawSprite();
  },

  drawSprite: function(){
      this.sprite.draw();
  },

  updateSprite: function(direction, action){
    if(action === "walk"){
      this.position += direction;
      this.sprite.updateWalk(direction);
    }else if (action === "punch"){
      this.sprite.updatePunch("punch");
    }else if(action == "damage"){
      this.sprite.updateDamage();
    }else if(action === "double punch"){
     this.sprite.updatePunch("double punch");
    }else if (action === "block"){
      this.sprite.updateBlock();
    }

  } 
}


module.exports = animationSpriteSheet;