fnStrings();

function fnStrings(): void {

    let sName: string = "Vikesh";
    let sLanguage: string = "TypeScript";
    let sMessage: string = `Hello ${sName}, welcome to ${sLanguage}!`; //using backticks ✅

    console.log(sMessage);  // Hello Vikesh, welcome to TypeScript!

    //String Methods
    console.log(sMessage.length);              // 36
    console.log(sMessage.toUpperCase());       // HELLO VIKESH, WELCOME TO TYPESCRIPT!
    console.log(sMessage.substring(5, 12));    // Vikesh
}