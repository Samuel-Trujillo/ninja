class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake(){
        this.health = this.health + 10;
    }
}


const nin1 = new Ninja("sam", 20);
nin1.sayName();
nin1.showStats();
nin1.drinkSake();
nin1.showStats();