fnObjects();

function fnObjects(): void {

  // A simple object with properties
  const oPerson = {
    name: "Vikesh",
    age: 30,
    isDeveloper: true
  };

  console.log(oPerson.name); // "Vikesh"
  console.log(oPerson.age);  // 30

  // Explicitly define the shape of the object
  let oCar: {
    brand: string;
    year: number
  };

  oCar = {
    brand: "Tesla",
    year: 2025
  };

  console.log(oCar.brand); // "Tesla"

  // Interfaces define reusable object types
  interface Employee {
    id: number;
    name: string;
    role: string;
  }

  const oEmployee: Employee = {
    id: 101,
    name: "Vikesh",
    role: "Architect"
  };

  console.log(oEmployee.role); // "Architect"

  // Objects can hold functions too
  const oCalculator = {
    number1: 0,
    number2: 0,

    addDefault(): number {
      return this.number1 + this.number2;
    },

    mulitplyDefault(): number {
      return this.number1 * this.number2;
    },

    add(a: number, b: number): number {
      return a + b;
    },

    multiply(a: number, b: number): number {
      return a * b;
    },

    hellWorld(name: string): void {
      console.log(`Hello, ${name}!`);
    }
  };

  oCalculator.number1 = 5;
  oCalculator.number2 = 10;

  console.log(oCalculator.addDefault());      // 15
  console.log(oCalculator.mulitplyDefault()); // 50
  console.log(oCalculator.add(5, 3));         // 8
  console.log(oCalculator.multiply(4, 2));    // 8
  oCalculator.hellWorld("Vikesh");            // "Hello, Vikesh!"

  // Objects inside objects
  const company = {
    name: "TechCorp",
    address: {
      city: "Bangalore",
      zip: 560045
    }
  };

  console.log(company.address.city); // "Bangalore"

}