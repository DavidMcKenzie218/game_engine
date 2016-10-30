const Sprite = require('./sprite.js');

const animationSpriteSheet = function(image, x, y, canvas){
  this.loaded = false;
  this.x = x;
  this.y = y;
  this.spriteSheet = new Image();
  this.spriteSheet.src = image; 
  console.log(this.spriteSheet);
  this.canvas = document.querySelector(canvas);
}

animationSpriteSheet.prototype = {

  resetSprite: function(){
    this.sprite.resetBooleans();
  },

  location: function(){
    return this.sprite.propertie.xCoord;
  },

  makeSprite: function(){
    this.spriteSheet.onload = function(){
      this.loaded = true;
      console.log("loaded");
      this.sprite = new Sprite({
        context: this.canvas.getContext('2d'),
        width: 2304,
        height: 128,
        image: this.spriteSheet,
        numberOfFrames: 18,
        ticksPerFrame: 1,
        loop: true,
        xStart: this.x
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
      this.sprite.updateWalk(direction, 4);
    }else if (action === "punch"){
      this.sprite.updatePunch(4, 9);
    }else if(action == "damage"){
      this.sprite.updateDamage(11, 17);
    }else if(action === "double punch"){
     this.sprite.updatePunch(4, 11);
    }else if (action === "block"){
      this.sprite.updateBlock(4, 5);
    }

  } 
}


module.exports = animationSpriteSheet;