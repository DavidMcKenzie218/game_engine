const assert = require('assert');
const Boxer = require('../boxer.js');

describe("Boxer", function(){

  let player;
  let enemy;

  before(function(){
    player = new Boxer();
    enemy = new Boxer(150)
  })

  it("has health", function(){
    assert.equal(100, player.health);
  })

  it("has dynamic health", function(){
    assert.equal(150, enemy.health);
    assert.equal(100, player.health);
  })

})