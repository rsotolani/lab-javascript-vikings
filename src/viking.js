// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        //console.log("Classe Soldier");
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        //console.log("Classe Viking", this.name, this);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
        
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        //console.log("Classe Saxon", this);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        //console.log(this.health);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
        
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {        
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        /* testes de randomico...

        let r = Math.random();
        let s = Math.random();
        let t = Math.random();
        console.log(r,
                    this.vikingArmy.length,
                    r * this.vikingArmy.length,
                    Math.floor(r * this.vikingArmy.length));
        console.log(s,
                    this.vikingArmy.length,
                    s * this.vikingArmy.length,
                    Math.floor(s * this.vikingArmy.length));
        console.log(t,
                    this.vikingArmy.length,
                    t * this.vikingArmy.length,
                    Math.floor(t * this.vikingArmy.length));
        */
        

        let vikingRandom = Math.floor(this.vikingArmy.length * Math.random());
        let viking = this.vikingArmy[vikingRandom];

        let saxonRandom = Math.floor(this.saxonArmy.length * Math.random());
        let saxon = this.saxonArmy[saxonRandom];

        let attack = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) this.saxonArmy.splice(saxonRandom, 1);

        return attack;
    }

    saxonAttack() {

        let vikingRandom = Math.floor(this.vikingArmy.length * Math.random());
        let viking = this.vikingArmy[vikingRandom];

        let saxonRandom = Math.floor(this.saxonArmy.length * Math.random());
        let saxon = this.saxonArmy[saxonRandom];

        let attack = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) this.vikingArmy.splice(vikingRandom, 1);

        return attack;

    }

    showStatus() {

    }

}

const war = new War();

war.addViking(new Viking("R",100,50));
//war.addViking(new Viking("S",100,50));
//war.addViking(new Viking("T",100,50));
//war.addViking(new Viking("U",100,50));
//war.addViking(new Viking("V",100,50));
//console.log(war.vikingArmy);

war.addSaxon(new Saxon(50,10));
war.addSaxon(new Saxon(50,10));
//war.addSaxon(new Saxon(50,10));
//war.addSaxon(new Saxon(50,10));
//war.addSaxon(new Saxon(50,10));
//console.log(war.saxonArmy);

console.log(war.vikingAttack());
console.log(war.saxonAttack());



