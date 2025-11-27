fnArrays();

function fnArrays(): void {

  // Basic typed array
  let aNumbers: number[] = [1, 2, 3, 4, 5];
  let aFruits: string[] = ["apple", "banana", "mango"];

  // Generic array type
  let aScores: Array<number> = [90, 85, 100];
  let aNames: Array<string> = ["James", "Mitchel", "Sandra"];

  // Mixed types with union
  let aMixed: (string | number)[] = ["hello", 42, "world"];

  // Accessing elements
  console.log(aNumbers[0]); // 1
  console.log(aFruits[2]);  // mango

  // Adding/removing elements
  aFruits = ["apple", "banana", "mango"];
  aFruits.push("orange");     // add at end; ["apple", "banana", "mango", "orange"]
  aFruits.pop();              // remove last; ["apple", "banana", "mango"]
  aFruits.unshift("orange");  // add at start; ["orange", "apple", "banana", "mango"]
  aFruits.shift();            // remove first; ["apple", "banana", "mango"]

  // Slice and Splice

  aFruits = ["apple", "banana", "mango"];

  let aFirstTwoFruitsSlice = aFruits.slice(1,2); //(startPosition,excludingPosition)
  //aFirstTwoFruitsSlice: ["apple"]
  //aFruits: ["apple", "banana", "mango"] (unchanged)

  aFruits = ["apple", "banana", "mango"];

  let aFirstTwoFruitsSplice = aFruits.splice(1,2); //(startIndex,endIndex)
  // aFirstTwoFruitsSplice: ["banana", "mango"]
  // aFruits: ["apple"] (modified)

  let aNewFruits = aFruits.splice(1, 1, "orange");
  // aNewFruits: ["banana"]
  // aFruits: ["apple", "orange", "mango"] (modified)

}