const Boxer = function(health, attackDamage, heavyAttackDamage){

  this.health = health || 100;
  this.attackDamage = attackDamage || 10;
  this.heavyAttackDamage = heavyAttackDamage || 20;

}

Boxer.prototype = {

  takeDamage: function(damage){
    this.health -= damage;
  }

}

module.exports = Boxer;