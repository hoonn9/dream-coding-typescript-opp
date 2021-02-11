/**
 * JS
 * Primitive: number, string, boolean, bigint, symbol, null, undefined
 * Object: function, array...
 */

// undefined
let age: number | undefined;

function find(): number | undefined {
  return undefined;
}

// null
let person: string | null;

// unknown  X
let notSure: unknown = 0;
notSure = "he";
notSure = true;

// any  X
let anything: any = 0;
anything = "hi";
anything = 30;

// void
function print(): void {
  console.log("print");
  return;
}
let unusable: void = undefined; // X

// never  절대 return 할 수 없는 타입
function throwError(message: string): never {
  // message -> server (log)
  throw new Error(message);
  while (true) {}
}

let neverEnding: never; // X

// object
let obj: object = []; // X
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: "hoon" });
acceptSomeObject({ animal: "cat" });
