const Boxer = function(health){

  this.health = health || 100;

}

Boxer.prototype = {

  takeDamage: function(damage){
    this.health -= damage;
  }

}

module.exports = Boxer;