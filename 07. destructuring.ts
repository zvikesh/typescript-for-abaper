fnDestructuring();

function fnDestructuring() {
    /**
     * Array Destructuring
     */

    const fruits: string[] = ["Apple", "Banana", "Mango"];

    // Basic destructuring
    const [first, second, third] = fruits;
    console.log(first);  // "Apple"
    console.log(second); // "Banana"
    console.log(third);  // "Mango"

    // Skipping elements
    const [firstFruit, , thirdFruit] = fruits;
    console.log(firstFruit); // "Apple"
    console.log(thirdFruit); // "Mango"

    // Using rest operator
    const [head, ...rest] = fruits;
    console.log(head); // "Apple"
    console.log(rest); // ["Banana", "Mango"]

    /**
     * Object Destructuring
     */

    interface Fruit {
        id: number;
        name: string;
        price: number;
        available?: boolean;
    }

    const oFruit: Fruit = { id: 1, name: "Apple", price: 50 };

    // Basic destructuring
    const { id, name, price } = oFruit;
    console.log(id);            // 1
    console.log(name);     // "Apple"
    console.log(price);         // 50

    // Renaming variables
    const { name: fruitName, price: fruitPrice } = oFruit;
    console.log(fruitName);  // "Apple"
    console.log(fruitPrice); // 50

    // Default values
    const { id: fruitId, available = true } = oFruit;
    console.log(fruitId);    // 1
    console.log(available);  // true

}