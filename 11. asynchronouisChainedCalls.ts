/**
 *💡Promise and Async/Await were intoduced to clean up the chained asynchronous calls.
 * But, now used as standard by various asynchronous APIs.
 */

/**
 * Callback Hell: Complex to manage indented chained asynchronous call.
 */
function fcallbackHell(): void {

    //Helper function to simulate an asynchronous operation with a callback.
    function fetchDataAsync<T>(data: T, callback: (result: T) => void): void {
        setTimeout(() => {
            console.log(`Fetched data: ${JSON.stringify(data)}`);
            callback(data);
        }, 500);
    }

    console.log("Starting operations...");

    // Asynchronous callback function to get User details
    fetchDataAsync({ userId: 1 }, (oUser) => {
        console.log(`Processing user: ${oUser.userId}`);

        // Asynchronous callback function to get Order details of the fetched User details
        fetchDataAsync({ orderId: 101, userId: oUser.userId }, (oOrder) => {
            console.log(`Processing order: ${oOrder.orderId}`);

            // Asynchronous callback function to process Order details of the fetched Order details
            fetchDataAsync({ detailId: 999, orderId: oOrder.orderId }, (oDetails) => {
                console.log(`Processing details: ${oDetails.detailId}`);

                // Asynchronous callback function to save Order details after processing
                fetchDataAsync("finished", (oStatus) => {

                    // The final step, UI related work
                    console.log(`All operations ${oStatus}!`);
                });
            });
        });
    });
}

/**
 * Promise: Chain operations vertically using the .then() method.
 */
function fPromiseChain(): void {
    // Helper function modified to return a Promise
    function fetchDataPromise<T>(data: T): Promise<T> {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Fetched data: ${JSON.stringify(data)}`);
                resolve(data);
            }, 500);
        });
    }

    // The Promise Chain solution
    console.log("Starting operations (using Promises)...");

    // Asynchronous callback function to get User details
    fetchDataPromise({ userId: 1 })
        .then((oUser) => {                                           //On Promise fullfillment by resolve()
            console.log(`Processing user: ${oUser.userId}`);

            // Asynchronous callback function to get Order details of the fetched User details
            return fetchDataPromise({ orderId: 101, userId: oUser.userId });
        })
        .then((oOrder) => {                                           //On Promise fullfillment by resolve()
            console.log(`Processing order: ${oOrder.orderId}`);

            // Asynchronous callback function to process Order details of the fetched Order details
            return fetchDataPromise({ detailId: 999, orderId: oOrder.orderId });
        })
        .then((oDetails) => {                                           //On Promise fullfillment by resolve()
            console.log(`Processing details: ${oDetails.detailId}`);

            // Asynchronous callback function to save Order details after processing
            return fetchDataPromise("finished");
        })
        .then((oStatus) => {                                           //On Promise fullfillment by resolve()

            // The final step, UI related work
            console.log(`All operations ${oStatus}!`);
        })
        .catch((error) => {
            // Single catch block handles errors anywhere in the chain
            console.error("An error occurred in the promise chain:", error);
        });
}

/**
 * Async/Await: Write asynchronous code in a synchronous style within a try/catch block
 * Even cleaner then Promise.then().catch()
 */
function fnAsyncAwait() {

    // Helper function modified to return a Promise
    function fetchDataPromise<T>(data: T): Promise<T> {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Fetched data: ${JSON.stringify(data)}`);
                resolve(data);
            }, 500);
        });
    }

    async function processData() {
        console.log("Starting operations (using async/await)...");

        try {
            // Wait for asynchronous promise to get User details
            const oUser = await fetchDataPromise({ userId: 1 });
            console.log(`Processing user: ${oUser.userId}`);

            // Wait for asynchronous promise to get Order details of the fetched User details
            const oOrder = await fetchDataPromise({ orderId: 101, userId: oUser.userId });
            console.log(`Processing order: ${oOrder.orderId}`);

            // Wait for asynchronous promise to process Order details of the fetched Order details
            const oDetails = await fetchDataPromise({ detailId: 999, orderId: oOrder.orderId });
            console.log(`Processing details: ${oDetails.detailId}`);

            // Wait for asynchronous promise to save Order details after processing
            const oStatus = await fetchDataPromise("finished");

            // The final step, UI related work
            console.log(`All operations ${oStatus}!`);

        } catch (error) {
            // Centralized error handling for any step that fails
            console.error("An error occurred during the async process:", error);
        }
    }

    // Call the main async function to start the sequence
    processData();
}