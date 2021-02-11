{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 클래스 레벨에서 공유되는 멤버변수는 static 으로 선언하여 클래스의 instance에서 제외한다 (메모리 효율)
  // static 상수는 this 가 아닌 클래스명. 으로 접근
  // 함수도 static으로 선언할 수 있다.
  // static 은 외부 환경에 의해 클래스 내에 변화가 있을 일이 없을 경우 사용

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (
        this.coffeeBeans <
        shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
      ) {
        throw new Error("Not enough coffee beans.");
      }

      this.coffeeBeans -=
        shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  CoffeeMaker.makeMachine(32);
  console.log(maker);
}
