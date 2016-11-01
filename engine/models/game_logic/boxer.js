const Boxer = function(health, attackDamage){

  this.health = health || 100;
  this.attackDamage = attackDamage || 10;

}

Boxer.prototype = {

  takeDamage: function(damage){
    this.health -= damage;
  }

}

module.exports = Boxer;