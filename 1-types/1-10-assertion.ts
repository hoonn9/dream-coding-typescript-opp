{
  /**
   * Type Assertions
   * X...
   *
   */

  function jsStrFunc(): any {
    return 2;
  }

  const result = jsStrFunc();
  // Type assertion 실패 시 undefinded
  console.log((result as string).length);
  console.log((<string>result).length);

  // X..  Error
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // 확신할때 (undefined 아닌 것을)
  const number = findNumbers();
  number!.push(2);

  const button = document.querySelector("class")!;
}
