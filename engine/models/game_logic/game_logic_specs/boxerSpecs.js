const assert = require('assert');
const Boxer = require('../boxer.js');

describe("Boxer", function(){

  let player;
  let enemy;

  before(function(){
    player = new Boxer("player");
    enemy = new Boxer("enemy", 150, 20, 25)
  })

  it("has health", function(){
    assert.equal(100, player.health);
  })

  it("has dynamic health", function(){
    assert.equal(150, enemy.health);
    assert.equal(100, player.health);
  })

  it("can take damage", function(){
    player.takeDamage(10);
    assert.equal(90, player.health);
  })

  it("has attack damage", function(){
    assert.equal(10, player.attackDamage);
  })

  it("has dynamic attack damage", function(){
    assert.equal(20, enemy.attackDamage);
  })

  it("has heavy attack damage", function(){
    assert.equal(20, player.heavyAttackDamage);
  })

  it("has dynamic heavy attack damage", function(){
    assert.equal(25, enemy.heavyAttackDamage);
  })

  it("has an identification", function(){
    assert.equal("player", player.id);
  })

})