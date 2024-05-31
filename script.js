// async function getData() {
//   //simulate data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   });
// }

//settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

//get request is simple request like you search on google is get request
//post request is like your submitting a form it has sensitive information

async function getData() {
  //simulate data from a server

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loading Data...");
  let data = await getData();
  console.log(data);
  console.log("task 1");
}
// we use async await to avoid this method
// data
//   .then((v) => {
//     console.log(data);
//     console.log("task 1");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
main();
console.log("task 2");

/* 1. Promise 
  A promise in JavaScript is like a container for a future value. It represents a value that might not be available yet but will be resolved at some point, either successfully or with an error. Promises help manage asynchronous operations, like fetching data from a server or reading a file, making it easier to handle tasks that take some time to complete.

  Types Of Promise :

  + Pending: The promise is still working on the task. It hasn't finished yet.
  + Fulfilled: The promise has successfully completed the task, and it has a result.
  + Rejected: The promise couldn't complete the task due to an error, and it has an error reason.

*/
//example of promise Ordering Pizza
let PizzaOrder = true; //make it false for rejecting the order
let pizzaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (PizzaOrder) {
      console.log("Order Dilivered Successfully");
    } else {
      console.log("Sorry, Order Rejected");
    }
  }, 3000);
});

pizzaPromise
  .then((v) => {
    console.log(v);
  })
  .catch((v) => {
    console.log(v);
  });

// Async And Await
/* 
 
  async and await are keywords in JavaScript that help you write cleaner and more readable code for handling asynchronous operations. They make it easier to work with promises by allowing you to write asynchronous code in a way that looks like regular, synchronous code.

  async
  The async keyword is used to define a function that will always return a promise. Even if you return a value directly, async will wrap it in a promise.

 */

//Example of async

async function fetchData() {
  return "Data Fetched";
}
fetchData().then((v) => {
  console.log(v);
});

/* 

  await
  The await keyword can only be used inside an async function. It makes JavaScript wait until a promise is resolved and returns its result. If the promise is rejected, it throws an error.

  Here's how they work together:

  Define an async function: This allows you to use await inside it.
  Use await to pause execution: It waits for the promise to resolve and gets the result.

*/

//Example of await

async function fetchData2() {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched Successfully");
    }, 3000);
  });

  let result = await data;
  console.log(result);
}

fetchData2();
