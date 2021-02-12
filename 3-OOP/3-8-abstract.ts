{
  /**
   * Abstract
   * 자체 적으로 생성(instance)을 할 수 없다.
   * 상속할 클래스마다 달라질 함수가 있다면 abstract를 준다.
   * 자식 클래스에서 다시 함수를 작성할 수 있다.
   * Composition이 더 좋다.
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error(
          "value for beans should be greater than 0"
        );
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (
        this.coffeeBeans <
        shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT
      ) {
        throw new Error("Not enough coffee beans.");
      }
      this.coffeeBeans -=
        shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up...");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }

    clean() {
      console.log("cleaning the machine");
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string
    ) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk..");
    }

    // Overloading
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  // 다형성의 장점
  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "Serial"),
    new SweetCoffeeMaker(16),
    new CaffeLatteMachine(16, "Serial"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("-----------------------");
    machine.makeCoffee(2);
  });
}
