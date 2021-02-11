{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literfal Types
   */

  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type Boal = true;
  const isCat: Boal = true;
  //   const isDog: Boal = false;
}
