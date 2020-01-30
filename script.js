class LivingBeing {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats`);
  }

  drink() {
    console.log(`${this.name} drinks`);
  }

  sleep() {
    console.log(`${this.name} sleeps`);
  }

  hibernate() {
    console.log(`${this.name} hibernates`);
  }
}

class Bear extends LivingBeing {
  hibernate() {
    console.log(`${this.name} hibernates`);
  }
}

class Monkey extends LivingBeing {
  jump() {
    console.log(`${this.name} jumps`);
  }
}

class Frog extends Monkey {}

const bob = new Bear("Bob");
const Monkeeyyyy = new Monkey("Monkeeyyyy");
const Froggy = new Frog("Froggy");

bob.drink();
bob.hibernate();
Froggy.hibernate();
Froggy.jump();

Monkeeyyyy.jump();
