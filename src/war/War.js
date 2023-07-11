// const Saxon = require("../saxon/Saxon.js");
// const Viking = require("../viking/Viking.js");

class War{
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let oldHealth = this.saxonArmy[0].health;
        this.saxonArmy[0].health = oldHealth - this.vikingArmy[0].strength;

        if (this.saxonArmy[0].health <= 0){
            this.saxonArmy.length = 0;
            return "A Saxon has died in combat";
        }
    }

    saxonAttack(){
        let oldHealth = this.vikingArmy[0].health;
        this.vikingArmy[0].health = oldHealth - this.saxonArmy[0].strength;

        if (this.vikingArmy[0].health <= 0){
           return this.vikingArmy.length = 0;
        }

        else {
            return this.vikingArmy[0].name + " has received " + this.saxonArmy[0].strength + " points of damage";
        }
    }
}

module.exports = War;
