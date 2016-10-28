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

})