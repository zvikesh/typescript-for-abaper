/**
    JavaScript Execution Model

    Single-threaded: JavaScript runs one task at a time using a single call stack (no parallel execution).
    ⏳Call Stack: Functions are added and removed in LIFO order (Last In, First Out).
    Heap: Stores objects and variables.

    Concurrency via Browser

    Web APIs: Handle tasks asynchronously outside the call stack (e.g., timers, DOM events).
    ⏳Task Queue: Holds callbacks from Web APIs until the call stack is free.
    ⏳Microtask Queue: Special queue for Promises; processed before the Task Queue.

    Event Loop

    Continuously checks if the call stack is empty.
    Moves tasks from Microtask Queue (priority) and Task Queue to the call stack for execution.

    More
    📺 JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue (https://www.youtube.com/watch?v=eiC58R16hb8)
 */
function fnSyncCallback(): void {

    function greeting(): string {
        return "Executing callback...";
    }

    function main(callback: () => void): void {
        console.log('start of main...');
        console.log(callback());                                //❗Callback fns are not asynchronous by default
        console.log('end of main...');
    }

    main(greeting);
    //Start of main...
    //Executing callback...
    //End of main...
}

function fnAsyncCallback(): void {

    function greeting(): string {
        return "Executing callback...";
    }

    function main(callback: () => void): void {
        console.log('start of main...');

        setTimeout(() => {                                      // Web APIs for asynchronous execution
            console.log(callback());
        }, 1000);

        console.log('End of main...');
    }

    main(greeting);
    //Start of main...
    //End of main...
    //Executing callback...
}