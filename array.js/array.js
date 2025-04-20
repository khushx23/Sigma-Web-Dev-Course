//Array is used to store multiple values in a single variable.
// It is a global object that is used in the construction of arrays.

let arr = [1,2,3,4,5]

console.log(arr);
console.log(arr.length)
console.log(arr[0]) // 1
console.log(arr[1]) // 2
console.log(arr[2]) // 3
arr[1] = 56;
console.log(arr) // 56
console.log(arr.join(" * "))