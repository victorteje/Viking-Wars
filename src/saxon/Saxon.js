const Soldier = require("../soldier/Soldier.js");

class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }

        if (this.health <= 0){
            return "A Saxon has died in combat";
        }
    }
}

module.exports = Saxon;
