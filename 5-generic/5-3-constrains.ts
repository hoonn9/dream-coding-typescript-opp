{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!");
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 X...
  // function payBad(employee: Employee): Employee {
  //   employee.pay();
  //   return employee;
  // }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  ellie.workFullTime();
  bob.workPartTime();

  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);

  const obj = {
    name: "hoon",
    age: 20,
  };

  const obj2 = {
    animal: "dog",
  };

  // interface TObject {
  //   [key: string]: any;
  // }

  // function getValue(obj: TObject, key: string) {
  //   if (!obj.hasOwnProperty(key)) {
  //     throw Error("object has not this key");
  //   }
  //   return obj[key];
  // }

  console.log(getValue(obj, "name")); // hoon
  console.log(getValue(obj, "age")); // 20
  console.log(getValue(obj2, "animal")); // 20

  function getValue<T, K extends keyof T>(
    obj: T,
    key: K
  ): T[K] {
    return obj[key];
  }
}
