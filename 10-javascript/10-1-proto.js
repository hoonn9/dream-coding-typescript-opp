const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);
console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;

  // Instacne member level
  // this.makeCoffee = (shots) => {
  //   console.log("making...");
  // };
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

latteMachine.makeCoffee();

// Prototype 은
// Javascript 에서의 객체지향 프로그래밍, 재사용성을 위한 방식
// 훨씬 편한 Typescript의 Class에 감사하자.
