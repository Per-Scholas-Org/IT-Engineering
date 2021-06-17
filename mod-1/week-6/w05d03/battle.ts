//////////////

function sayHello() {

    console.log('Hello! This syntax seems familiar . . . .');
    
    }
    
    sayHello();
    
    //////////////
    
    function sayPointsScored(points): void {
    
    let lebronJamesMutiplier = 1000;
    
    let pointsScored = points * lebronJamesMutiplier;
    
    let proclamation = Lebron James scored ${pointsScored} points!;
    
    console.log(proclamation);
    
    }
    
    let pointsScored = 9000;
    
    sayPointsScored(pointsScored);
    
    //////////////////////
    
    ///////////////////
    
    class Bunny {
    
      static numberOfLegs = 4;
    
      public name: string;
    
      public isAGoodBoy: boolean;
    
      public numberOfPets: number;
    
      private pregnant: boolean;
    
      constructor(name: string, pregnant: boolean){
    
        this.name = name;
    
        this.pregnant = pregnant;
    
        this.isAGoodBoy = false;
    
        this.numberOfPets = 0;
    
      }
    
      isPregnant(){
    
        return this.pregnant;
    
      }
    
    }
    
    class Elephant {
    
      public name: string;
    
      public isAGoodBoy: boolean;
    
      public numberOfPets: number;
    
      public peanuts: Array
    
      constructor(name: string){
    
        this.name = name;
    
        this.isAGoodBoy = false;
    
        this.numberOfPets = 0;
    
        this.peanuts = [new Peanut()]
    
      }
    
      toot() {
    
        console.log('TOOT TOOT!');
    
      }
    
    }
    
    class Peanut {
    
      public numberOfNuts: number;
    
      constructor(){
    
        this.numberOfNuts = 2;
    
      }
    
    }
    
    const stray = {
    
      numberOfPets: 0,
    
      isAGoodBoy: true,
    
      legs: 3
    
    }
    
    export { Bunny, Elephant, stray }
    
    /////////////
    
    /////////////////////////
    
    class Warrior {
    
      private wearingUnderwear: boolean;
    
      public weapon: Weapon;
    
      public health: number;
    
      private fightId: number;
    
      public fullName: string;
    
      constructor(fullName: string) {
    
        this.fullName = fullName;
    
        this.health = 100;
    
        this.wearingUnderwear = true;
    
      }
    
      fight(target: Warrior) {
    
        this.fightId = setTimeout(() => {
    
          this.weapon.swing(target);
    
        }, this.weapon.secondsBetweenSwings);
    
      }
    
      isWearingUnderwear(value) {
    
        this.wearingUnderwear = value;
    
      }
    
    }
    
    class Sword {
    
      public shiny: boolean;
    
      public sharp: boolean;
    
      public damage: number;
    
      public secondsBetweenSwings: number;
    
      constructor() {
    
        this.shiny = true;
    
        this.sharp = true;
    
        this.damage = 10;
    
        this.secondsBetweenSwings = 5;
    
      }
    
      swing(target: Warrior) {
    
        target.health -= this.damage;
    
        console.log(${target.fullName} is down to ${target.health} health.);
    
      }
    
    }
    
    class Mace {
    
      public pointy: boolean;
    
      public numberOfPoints: number;
    
      public damage: number;
    
      constructor() {
    
        this.pointy = true;
    
        this.numberOfPoints = 12;
    
        this.damage = 30;
    
      }
    
    }
    
    interface Weapon {
    
      damage: number;
    
      secondsBetweenSwings: number;
    
      swing(target: Warrior): void;
    
    }
    
    let leeroy = new Warrior('Leeroy Jenkins');
    
    leeroy.weapon = new Sword();
    
    let lebron = new Warrior('Lebron James');
    
    lebron.weapon = new Sword();
    
    leeroy.isWearingUnderwear(false);
    
    lebron.fight(leeroy);
    
    leeroy.fight(lebron);
    
    //////////////////////