const Soldier = require("../soldier/Soldier");

class Saxon extends Soldier{
    constructor(health, strength) {
        super(health);
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
}

module.exports = Saxon;
