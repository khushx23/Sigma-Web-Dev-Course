🔁 The Problem: Asynchronous Code
In JavaScript, many operations are asynchronous—like fetching data from an API. Without async/await, you'd typically use Promises like this:

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
This can get messy with nested calls.

✅ The Solution: async and await
async Keyword:
Declares a function that always returns a Promise.

Allows you to use await inside the function.

await Keyword:
Pauses execution until the Promise is resolved or rejected.

Can only be used inside an async function.

🧠 Example:

async function getData() {
  try {
    const response = await fetch('https://api.example.com/data'); // waits for fetch
    const data = await response.json(); // waits for parsing
    console.log(data); // now safe to use data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getData();
This is much more readable than chained .then() calls, especially with multiple asynchronous steps.

✅ Benefits:
Cleaner, more readable code.

Easier to handle errors using try...catch.

Looks synchronous but works asynchronously.