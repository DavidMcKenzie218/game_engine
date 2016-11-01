const assert = require('assert');
const Game = require('../game_rules.js');
const Boxer = require('../boxer.js');

describe("Game", function(){

  let game;
  let player;
  let enemy;

  before(function(){
    game = new Game();
    player = new Boxer();
    enemy = new Boxer();
  });

  beforeEach(function(){
    game.reset();
    player.health = 100;
  })

  it("has no winner", function(){
    assert.equal(false, game.isWinner);
  })

  it("can have a player as a winner", function(){
    assert.equal(null, game.winner);
  })

  it("has a winner", function(){
    game.setWinner();
    assert.equal(true, game.isWinner);
  })

  it("has a winning player", function(){
    game.setWinner(player);
    assert.equal(player, game.winner);
  })

  it("can hold players", function(){
    assert.deepEqual([], game.players);
  })

  it("has players", function(){
    game.addPlayer(player);
    assert.deepEqual([player], game.players)
  })

  it("can check the health of all of the players", function(){
    game.addPlayer(player);
    assert.equal(100, game.checkHealth(0));
  })

  it("can compare the health of the player to see if they have lost", function(){
    game.addPlayer(player);
    assert.equal(false, game.checkForWinner());
  })

  it("can determine if a player has been beaten", function(){
    player.health = 0;
    game.addPlayer(player);
    assert.equal(true, game.checkForWinner());
  })

  it("player can attack player", function(){
    game.addPlayer(player);
    game.addPlayer(enemy);
    game.playerAttackPlayer(0);
    assert.equal(90, enemy.health);
  })

})