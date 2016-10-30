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
        width: 2304,
        height: 128,
        image: this.spriteSheet,
        numberOfFrames: 18,
        ticksPerFrame: 1,
        loop: true
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
    }
  }

}


module.exports = animationSpriteSheet;