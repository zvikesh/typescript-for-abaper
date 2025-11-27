fnDataTypes();

function fnDataTypes(): void {

  /* Key takeaways
  - number: integers, floats, etc.
  - string: text values, template literals.
  - boolean: true/false flags.
  - array: collections of typed values.
  - tuple: fixed-length, ordered types.
  - enum: named constants.
  - object: structured data.
  */

  // 1. Number
  let iAge: number = 30;
  let iPi: number = 3.14;

  // 2. String
  let sCity: string = "Bangalore";
  let sGreeting: string = `Hello, ${city}!`;

  // 3. Boolean
  let isActive: boolean = true;
  let isDone: boolean = false;

  // 4. Array
  let aNumbers: number[] = [1, 2, 3];
  let aFruits: Array<string> = ["apple", "banana", "mango"];

  // 5. Tuple (fixed length, specific types)
  let tPerson: [string, number] = ["Vikesh", 30];

  // 6. Enum
  enum Direction {
    North,
    East,
    South,
    West
  }
  let move: Direction = Direction.North;

  // 7. Object
  let oUser: { name: string; age: number } = {
    name: "Vikesh",
    age: 30
  };

  /*---------- ❌ Other Types ----------*/

  /* Other Types
  - union types: multiple possible types.
  - literal types: restrict to specific values.
  - any: disables type checking (use sparingly).
  - unknown: safer alternative to any.
  - void: functions with no return.
  - null and undefined: represent absence of value.*/

  // 8. Union Types
  let uScore: number | string;
  uScore = 95;
  uScore = "A+";

  // 9. Literal Types
  let sStatus: "success" | "error" | "loading";
  sStatus = "success"; // ✅ only these values allowed

  // 10. Any (avoid unless necessary)
  let random: any = "hello";
  random = 42;
  random = { key: "value" };

  // 11. Unknown (safer than any)
  let input: unknown = "test";
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  }

  // 12. Void (no return value)
  function logMessage(message: string): void {
    console.log(message);
  }

  // 13. Null and Undefined
  let u: undefined = undefined;
  let n: null = null;

}