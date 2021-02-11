{
  /**
   * Intersection Type: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "name",
    score: 30,
    employeeId: 30,
    work: () => null,
  });
}
