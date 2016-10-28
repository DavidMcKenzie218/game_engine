const assert = require('assert');
const playerInput = require('../playerInput.js');

describe("Player", function(){

  let input;

  before(function(){
    input = new playerInput();
  })

  it("has no input", function(){
    assert.equal(null, input.current)
  })
  

})