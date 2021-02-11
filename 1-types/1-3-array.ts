{
  // Array
  const fruits: string[] = ["Apple", "Banana"];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class 로 대체
  let student: [string, number];
  student = ["name", 3];
  student[0];
  student[1];

  const [name, age] = student;
  // 잘 활용한 ex ) react hooks useState
}
