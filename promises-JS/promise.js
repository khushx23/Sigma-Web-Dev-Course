console.log('This is promises');
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Case of Failure!');
    }
    else {
        
        setTimeout(() => {
            console.log('Yes i am done');
            resolve('Khushi');
        }, 3000);
    }
    })
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Case of Failure 2!');
    }
    else {
        
        setTimeout(() => {
            console.log('Yes i am done2');
            resolve('Khushi2');
        }, 1000);
    }
    })


prom1.then((a) => { // This function will run if the promise is resolved (successful).
  // It takes one argument (a) and logs it to the console.
  console.log(a);
  console.log(err);
}) .catch((err) => { // This function will run if the promise is rejected (failed).
  // It takes one argument (err) and logs it to the console.
    // This is where you handle the error.
    // You can log it, show a message to the user, or do something else.
    // In this case, it just logs the error message to the console.
    // This is the error message that was passed to the reject function in the promise.
})

// let p3 = Promise.all([prom1, prom2])    // This function takes an array of promises and waits for all of them to resolve (succeed).
// p3.then ((a) => {
//     console.log(a)
// }) .catch(err => {
//     console.log(err)
// })
let p5 = Promise.race([prom1, prom2]) // This function takes an array of promises and waits for the first one to settle (either resolve or reject).
// It returns a new promise that resolves or rejects as soon as one of the promises in the input array settles.
p5.then ((a) => {
    console.log(a)
}) .catch(err => {
    console.log(err)
})
// let p4 = Promise.allSettled([prom1, prom2]) // This function takes an array of promises and waits for all of them to settle (either resolve or reject).
// // It returns a new promise that resolves with an array of objects, each representing the outcome of each promise in the input array.
// p4.then ((a) => {
//     console.log(a)
// }) .catch(err => {
//     console.log(err)
// })




  
