{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface SweetCoffeeCup extends CoffeeCup {
    sugars: number;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface SweetCoffeeMaker {
    makeSweetCoffee(sugar: number): SweetCoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }

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
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker implements SweetCoffeeMaker {
    constructor(private coffeeCup: CoffeeCup) {}
    makeSweetCoffee(sugars: number): SweetCoffeeCup {
      return { ...this.coffeeCup, sugars: sugars };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "Serial");

  const sweetCoffee = new SweetCoffeeMaker(
    latteMachine.makeCoffee(2)
  ).makeSweetCoffee(6);

  console.log(sweetCoffee);
}
