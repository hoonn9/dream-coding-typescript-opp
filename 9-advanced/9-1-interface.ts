type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object

const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

//Interface 만 merge가 가능

interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

// Type 만 가능

type Name = Person["name"]; // string

type NumberType = number;
type Direction = "down" | "up";
