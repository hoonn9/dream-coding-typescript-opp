{
  //   function add(num: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // Javascript
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // Typescript
  //   function fetchNum(id: string): Promise<number> {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // Rest parameter

  function addNumber(...numbers: number[]): number {
    return numbers.reduce((prev, curr) => prev + curr, 0);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
}
