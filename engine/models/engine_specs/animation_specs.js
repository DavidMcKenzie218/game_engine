const assert = require('assert');
const Animation = require('../animation.js');

describe("Game has, ", function(){

  let animation;

  before(function(){
    animation = new Animation();
  })

  it("no sprites for the player", function(){
    assert.deepEqual([], animation.playerSprites);
  })

  it("has no sprites for the enemey", function(){
    assert.deepEqual([], animation.enemySprites);
  })

  it("can add player sprites", function(){
    animation.addPlayerSprites(["img1", "img2"], "walking")
    assert.deepEqual([{action: "walking", sprites: ["img1", "img2"]}], animation.playerSprites);
  })

  it("can add enemy sprites", function(){
    animation.addEnemySprites(["img 1", "img 2"], "walking", "enemy 1");
    assert.deepEqual([{enemy: "enemy 1", action: "walking", sprites: ["img 1", "img 2"]}], animation.enemySprites);
  })

})