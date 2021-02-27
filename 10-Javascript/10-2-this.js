// Javacript는 타 프로그래밍 언어와는 다르게
// 누가 this를 부르냐에 따라 대상이 달라진다.

// global은 window
console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
simpleFunc();
console.clear();

class Counter {
  count = 0;

  // 일반 function은 this가 유동적으로 변함
  // increase = function () {
  //   console.log(this);
  // };

  // arrow 함수는 this context가 유지된다.
  increase = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

// increate 포인터를 caller 변수로 할당
// const let로 선언한 변수는 window에 선언되어있지 않아서
// undefined (this를 잃어버림)
const caller = counter.increase;
caller();
// this를 잃어버리지 않으려면 bind 또는 arrow
const caller2 = counter.increase.bind(counter);
caller2();

// function 으로 선언한 함수(변수 x, 예외 var은 등록됨)는 window 객체에 등록된다.
// const, let 으로 함수, 변수는 등록되지 않음.

class Bob {}
const bob = new Bob();
// call 한 객체가 bob이기 떄문에 this는 Bob
bob.run = counter.increase;
bob.run();
