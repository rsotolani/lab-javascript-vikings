// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        console.log("Classe Soldier");
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
        console.log("Classe Saxon", this);
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        console.log(this.health);
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
        
    }

    battleCry() {
        return `Odin Owns You All!`;
    }
}

// War
class War {
    

}

const soldier = new Soldier(100,10);
const viking = new Viking("Rodrigo",100,20);
console.log(viking.receiveDamage(20));