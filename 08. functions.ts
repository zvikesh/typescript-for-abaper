/**
 * Basic function with typed parameters and return type
 */
function fnBasicFunctions(): void {

    function fnAdd(a: number, b: number): number {
        return a + b;
    }
    console.log(add(5, 3)); // 8

    // Function with optional parameter
    function fnGreet(name: string, age?: number): string {
        if (age) {
            return `Hello ${name}, you are ${age} years old.`;
        }
        return `Hello ${name}!`;
    }
    console.log(fnGreet("Vikesh")); // Hello Vikesh!

    // Function with default parameter
    function fnMultiply(a: number, b: number = 2): number {
        return a * b;
    }
    console.log(fnMultiply(5)); // 10
}

/**
 * Anonymous Function; A function without a name, used as a callback function
 */
function fnAnonymousFunction(): void {
    // Callback function in array method
    const aNumbers: number[] = [1, 2, 3, 4, 5];
    const iDoubled = aNumbers.map(function (iNumber: number): number {
        return iNumber * 2;
    });
    console.log(iDoubled); // [2, 4, 6, 8, 10]

    // Callback function in array method
    setTimeout(function () {
        console.log("Hello from anonymous function");
    }, 1000);
}

/**
 * Function Expression; A function assigned to a variable (can be named or not)
 */
function fnFunctionExpression(): void {
    // Anonymous function expression    
    const sGreetCallerEnglish = function (name: string): string {
        return `Hello ${name}`;
    };
    console.log(sGreetCallerEnglish("Vikesh")); // Hello Vikesh

    //Named function expression
    const sGreetCallerGerman = function fnGreet(name: string): string {
        return `Hallo ${name}`;
    };
    console.log(sGreetCallerGerman("Vikesh")); // Hallo Vikesh
}

/**
 * Arrow Function; Anonymous function expression with shorter syntax 
 * Used as:
 * - Expression - Assign to variable
 * - Anonymous - Callbacks; also preserves parent 'this' context
 */
function fnAnonymousExpressionFunction(): void {

    // As function expression for variable
    const fnAdd = (a: number, b: number): number => a + b;

    const fnGreet = (name: string, age?: number): string => {
        if (age) {
            return `Hello ${name}, you are ${age} years old.`;
        }
        return `Hello ${name}!`;
    };

    // As callback function
    setTimeout(() => { console.log("Hello from anonymous function"); }, 1000);

    // As callback function in array method
    const aNumbers: number[] = [1, 2, 3, 4, 5];
    const iDoubled = aNumbers.map((iNumber: number): number => iNumber * 2); // [2, 4, 6, 8, 10]

}
