const assert = require('assert');
const Boxer = require('../boxer.js');

describe("Boxer", function(){

  let player;

  before(function(){
    player = new Boxer();
  })

  it("has health", function(){
    assert.equal(100, player.health);
  })

})