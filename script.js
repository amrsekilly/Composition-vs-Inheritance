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

function livingBeing(name) {
  return {
    eat: () => eat(name),
    drink: () => drink(name)
  };
}

function bearCreator(name) {
  return {
    ...livingBeing(name),
    hibernate: () => hibernate(name)
  };
}

function monkeyCreator(name) {
  return {
    ...livingBeing(name),
    jump: () => jump(name)
  };
}

function frogCreator(name) {
  return {
    ...livingBeing,
    jump: () => jump(name),
    hibernate: () => hibernate(name)
  };
}

const bob = bearCreator("Bob");
const Monkeeyyyy = monkeyCreator("Monkeeyyyy");
const Froggy = new frogCreator("Froggy");

bob.drink();
bob.hibernate();
Froggy.hibernate();
Froggy.jump();

Monkeeyyyy.jump();
