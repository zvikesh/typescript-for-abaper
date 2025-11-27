fnLetVarConst();

function fnLetVarConst(): void {

    /* Key takeaways
    - var: function-scoped, reassignable ❌
    - let: reassignable, block-scoped
    - const: immutable, block-scoped*/

    // Using let: value can change
    let iAge: number = 25;
    iAge = 26;                           // ✅ allowed

    // Using const: value cannot change
    const sName: string = "Vikesh";
    // name = "Rahul";                  // ❌ Error: cannot reassign a const

    // Type inference: TypeScript guesses the type
    let sCity = "Bangalore";             // inferred as string
    // city = 123;                      // ❌ Error: type mismatch
}