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

let a = [1,93,5,6,88]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}
// a.forEach(value, index, arr)=>{
//     console.log(value, index, arr);
    
// };

let obj = {
    a:1,
    b:2,
    c:3,
}
for (const key in obj) { // for in loop is used to iterate over the properties of an object
    if (Object.hasOwnProperty.call(obj, key)) { // Object.hasOwnProperty.call() is used to check if the object has the property
        const element = obj[key];
        console.log(element);
    }
}

for (const element of a) {
    console.log(element); // for of loop is used to iterate over the values of an iterable object
    
}

let b = [1,2,3,4,5]
let newarr = b.map((e, index, arr) => {
    return e ** 2; // map() method creates a new array with the results of calling a provided function on every element in the calling array.
})
console.log(newarr); // [1, 4, 9, 16, 25]
const greaterthanseven =(e)=>{
    if(e > 7){
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterthanseven)) // filter() method creates a new array with all elements that pass the test implemented by the provided function.
