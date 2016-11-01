const assert = require('assert');
const Game = require('../game_rules.js');

describe("Game", function(){

  let game;

  before(function(){
    game = new Game();
  });

  it("has no winner", function(){
    assert.equal(false, game.isWinner);
  })

  it("can have a player as a winner", function(){
    assert.equal(null, game.winner)
  })

})