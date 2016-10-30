const Sprite = require('./sprite.js');

const animationSpriteSheet = function(callback){
  this.loaded = false;
  this.spriteSheet = new Image();
  this.spriteSheet.src = "./images/CharSheetWalk.png"; 
  console.log(this.spriteSheet);
  this.canvas = document.querySelector('canvas');
  console.log(this.canvas)}

animationSpriteSheet.prototype = {

  makeSprite: function(){
    this.spriteSheet.onload = function(){
      this.loaded = true;
      console.log("loaded");
      this.sprite = new Sprite({
        context: this.canvas.getContext('2d'),
        width: 512,
        height: 128,
        image: this.spriteSheet,
        numberOfFrames: 4,
        ticksPerFrame: 1,
        loop: true
      });
      console.log(this.sprite.image)
      console.log(this.spriteSheet)
      this.addSprite();
    }.bind(this)
  },

  addSprite: function(){
    console.log("adding sprite")
    console.log(this)
      this.spriteProps = this.sprite.properties;
      console.log(this.spriteProps);
      this.drawSprite();
  },

  drawSprite: function(){
    console.log("drawing sprite")
      this.sprite.draw();
      this.updateSprite();
  },

  updateSprite: function(){
    console.log("wow much animation");
    this.sprite.update();
    console.log(this.sprite.tickCount)
  }

}


module.exports = animationSpriteSheet;