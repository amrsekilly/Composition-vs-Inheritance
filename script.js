function eat(name) {
  console.log(`${name} eats`);
}

function drink(name) {
  console.log(`${name} drinks`);
}

function sleep(name) {
  console.log(`${name} sleeps`);
}

function hibernate(name) {
  console.log(`${name} hibernates`);
}

function jump(name) {
  console.log(`${name} jumps`);
}

function swim(name) {
  console.log(`${name} swims`);
}

function livingBeingCreator(name) {
  return {
    eat: () => eat(name),
    drink: () => drink(name),
    sleep: () => sleep(name)
  };
}

function monkeyCreator(name) {
  return {
    ...livingBeingCreator(name),
    jump: () => jump(name)
  };
}

function bearCreator(name) {
  return {
    ...livingBeingCreator(name),
    hibernate: () => hibernate(name)
  };
}

function frogCreator(name) {
  return {
    ...livingBeingCreator(name),
    hibernate: () => hibernate(name),
    jump: () => jump(name),
    swim: () => swim(name)
  };
}

const Bob = monkeyCreator("Bob");
const Bearrr = bearCreator("Bearrr");
const Frogy = frogCreator("Frogy");

Bob.eat();
Bob.drink();
Bob.sleep();
Bob.jump();

Bearrr.eat();
Bearrr.drink();
Bearrr.sleep();
Bearrr.hibernate();

Frogy.eat();
Frogy.drink();
Frogy.sleep();
Frogy.hibernate();
Frogy.swim();
Frogy.jump();
