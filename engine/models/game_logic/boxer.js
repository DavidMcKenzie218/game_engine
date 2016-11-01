const Boxer = function(id, health, attackDamage, heavyAttackDamage){

  this.id = id;
  this.health = health || 100;
  this.attackDamage = attackDamage || 10;
  this.heavyAttackDamage = heavyAttackDamage || 20;

}

Boxer.prototype = {

  takeDamage: function(damage){
    this.health = this.health - damage;
  }

}

module.exports = Boxer;