const assert = require('assert');
const Game = require('../game_rules.js');
const Boxer = require('../boxer.js');

describe("Game", function(){

  let game;
  let player;

  before(function(){
    game = new Game();
    player = new Boxer();
  });

  beforeEach(function(){
    game.reset();
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

})