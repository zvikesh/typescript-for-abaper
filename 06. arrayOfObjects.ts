fnArrayOfObjects();

function fnArrayOfObjects(): void {

  // Object Interface
  interface Fruit {
    id: number;
    name: string;
    price?: number;
    available?: boolean;
  }

  // Array of Objects
  const aFruits: Fruit[] = [
    { id: 1, name: "Apple", price: 50, available: true },
    { id: 2, name: "Banana", price: 20, available: false },
    { id: 3, name: "Cherry", price: 75, available: true }
  ];

  /**
   * Iterating over array of objects
   */

  // Classic for loop
  for (let i = 0; i < aFruits.length; i++) {
    console.log(aFruits[i].name);
  }

  // For simple scenarios
  aFruits.forEach((oFruit: Fruit) => {
    console.log(oFruit.name);
    /*Logic here*/
  });

  //for...of for cleaner array iteration with some complex work
  for (const oFruit of aFruits) {
    console.log(oFruit.name);           //Apple, Banana, Cherry

    //for...in for object iteration
    for (const oFruitKey in oFruit) {
      if (oFruitKey === "name") {
        console.log(oFruit[oFruitKey as keyof typeof oFruit]); //Apple, Banana, Cherry
      }
    }
  }

  /**
   * Check for an object using some() or every()
   */

  const isAnyFruitAvailable: boolean = aFruits.some((oFruit: Fruit): boolean => oFruit.available === true); //true  
  const areAllFruitsAvailable: boolean = aFruits.every((oFruit: Fruit): boolean => oFruit.available === true); //true

  //Short Typed
  //const isAnyFruitAvailable = aFruits.some((oFruit) => oFruit.available);
  //const areAllFruitsAvailable = aFruits.every((oFruit) => oFruit.available);

  /**
   * Accessing an object using find() & findIndex()
   */
  const oFruit: Fruit | undefined = aFruits.find((oFruit: Fruit): boolean => oFruit.id === 2); //{ id: 2, name: 'Banana' }
  const oFruitIndex: number = aFruits.findIndex((oFruit: Fruit) => oFruit.name === "Banana"); // 1

  // Short Typed
  //const oFruit = aFruits.find((oFruit) => oFruit.id === 2);
  //const oFruitIndex = aFruits.findIndex((oFruit) => oFruit.name === "Banana");

  /**
   * Transform Elements using map(), filter() & reduce()
   */
  interface FruitsWithGST {
    id: number;
    name: string;
    price?: number;
    available?: boolean;
    gst?: number;
    sellingPrice?: number;
  }

  const aFruitsWithGST: FruitsWithGST[] = aFruits.map((oFruit: Fruit): FruitsWithGST => {
    const gst = (oFruit.price ?? 0) * 0.18;
    return {
      ...oFruit,
      gst,
      sellingPrice: (oFruit.price ?? 0) + gst
    }
  });
  /**
   * { id: 1, name: "Apple",  price: 50, available: true,  gst: 9,    sellingPrice: 59 }, 
   * { id: 2, name: "Banana", price: 20, available: false, gst: 3.6,  sellingPrice: 23.6 }, 
   * { id: 3, name: "Cherry", price: 75, available: true,  gst: 13.5, sellingPrice: 88.5 }] */

  const aAvailableFruits: Fruit[] | undefined = aFruits.filter((oFruit: Fruit): Fruit | undefined => {
    if (oFruit.available) {
      return oFruit;
    }
  });
  /** 
   * [{ id: 1, name: "Apple", price: 50, available: true }, 
   * { id: 3, name: "Cherry", price: 75, available: true }] */

  //Short Typed
  // const aAvailableFruits = aFruits.filter((oFruit) => oFruit.available );

  const totalPrice: number = aFruits.reduce((iSum: number, oFruit: Fruit): number => iSum + (oFruit.price ?? 0), 0); //145

  //Short Typed
  //const totalPrice = aFruits.reduce((iSum, oFruit) => iSum + (oFruit.price ?? 0), 0);

  /**
   * Sorting Array
   * ❗Use backend sorting for large data sets
   */
  aFruits.sort((a, b) => a.id - b.id);
  /*
  [ { id: 1, name: "Apple", price: 50, available: true },
    { id: 2, name: "Banana", price: 20, available: false },
    { id: 3, name: "Cherry", price: 75, available: true } ]
  */

  //Descending 
  //aFruits.sort((a, b) => b.id - a.id) 

  /**
   * Add, Update, Remove Object
   * ❗Use backend operations for large data sets
  */

  //Add
  const oNewFruit: Fruit = { id: 4, name: 'Date', price: 40, available: true };
  const aAddedFruits = [...aFruits, oNewFruit];

  //Update
  const aUpdatedFruits = aFruits.map(oFruit => oFruit.id === 2 ? { ...oFruit, price: 25, available: true } : oFruit);

  //Removed
  const aRemovedFruits = aFruits.filter(oFruit => oFruit.id !== 1);
}