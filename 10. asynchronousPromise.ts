/**
 * A promise(callback) is an object, with two output functions 'resolve' and 'reject'.
 * - Output of the resolve(), will be handled using .then(resolveRespone); could by string, number, object, another promise etc.
 * - Output of the reject(), will be handled using .catch(rejectRespone); usually a text
 * 
 * 💡We never have to create promise, only consume it. Below example is for basic understanding.
 */
function fnPromise(): void {

    function greeting(): string {
        //return "";
        return "Executing callback...";
    }

    function main(callback: () => string): Promise<string> {
        console.log("Start of main...");

        return new Promise<string>((resolve, reject): void => {
            setTimeout(() => {
                const result = callback();
                if (typeof result !== "string" || result.length === 0) {
                    reject("Error: Callback did not return a non-empty string");
                    return;
                }
                console.log(result); // "Executing callback..."
                resolve("Callback executed");
            }, 1000);
        });
    }

    // Use the Promise
    main(greeting)
        .then((resolveOutput) => {
            console.log(`promiseOutput: ${resolveOutput}`);
        })
        .catch((rejectOutput) => {
            console.error(rejectOutput);
        });
        /*
        "Start of main..." 
        "Executing callback..." 
        "promiseOutput: Callback executed" 
        */
}