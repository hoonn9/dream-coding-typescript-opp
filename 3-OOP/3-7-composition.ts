{
  /**
   * Composion 구성 요소
   * 말 그대로 클래스가 구성 요소를 사용하게 만들어서 의존도를 줄이는 것
   * 우유와 설탕이 함께 들어간 커피머신을 만들고 싶을때
   * 깊이가 깊어지는 상속은 X
   * 우유머신과 설탕머신을 상속받는다?
   * 타입스크립트는 1가지의 클래스만 상속받을 수 있다.
   * 특정 기능들을 빼서 클래스로 선언하여 dependency injection (의존성 주입) 을 한다.
   * 코드 재사용성을 높일 수 있다.
   * 콜래스 끼리 서로 많은 것을 알고있으면 좋지 않은 코드이다. (커플링)
   *
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk..");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer // dependency injection
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugar: CandySugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private mlik: CheapMilkSteamer,
      private sugar: CandySugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.mlik.makeMilk(sugarAdded);
    }
  }

  // 재사용성이 떨어진다. candy, cheap 이 아닌 것을 사용하게 되면 대참사
  // 클래스들 사이에 서로 상호작용을 하는 경우에 클래스 자신을 노출하는 것이 아닌 계약서 (interface) 로 노출해야한다
  // 이것이 디커플링
  const CheapMilkMaker = new CheapMilkSteamer();
  const candySugar = new CandySugarMixer();
  const latteMachine = new CaffeLatteMachine(
    12,
    "Serial",
    CheapMilkMaker
  );
  const sweetMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetLatteMachine = new SweetCaffeLatteMachine(
    12,
    CheapMilkMaker,
    candySugar
  );
}
