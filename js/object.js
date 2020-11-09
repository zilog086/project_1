'use strict';

const soldier = {
  health: 400,
  armor: 100,
  sayHi: () => {
    console.log('Hello !');
  }
};

const soldierJohn = Object.create(soldier);

soldierJohn.sayHi();
soldierJohn.health = 200;
console.log(soldierJohn.health);
console.dir(soldierJohn);
