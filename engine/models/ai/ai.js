const Ai = function(){



}

Ai.prototype = {

  choice: function(){
    return rng = Math.ceil(Math.random() * 5);
  }

}

module.exports = Ai;