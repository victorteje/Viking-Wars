class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        damage = 50;
        this.health = this.health - damage;
        return this.health;
    }

    receiveDamage(damage){
        damage = 50;
        this.health = this.health - damage;
        console.log(this.health);
    }
}


module.exports = Soldier;