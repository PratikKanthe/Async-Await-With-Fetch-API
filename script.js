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
