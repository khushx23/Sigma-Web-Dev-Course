console.log("This is strings tutorial");
let a = "Khushi";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
//indexing starts from 0 and ends at n-1
console.log(a.length) //length of string

let real_name = "Khushi";
let friend = "Tanu";
console.log("Her name is" + real_name + " and her friends' name is " + friend); //concatenation of strings
console.log(`Her name is ${real_name} and her friends' name is ${friend}`); //template literals


let b = "Tanushree"
console.log(b.toUpperCase()) //convert to upper case
console.log(b.toLowerCase()) //convert to lower case
console.log(b.slice(1, 4)) //slice the string from 0 to 3
console.log(b.replace("Sh","23")) //replace the string "Sh" with "23"
console.log(b.concat(a," is a good friend")) //concatenate the string with " is a good friend"
//Strings are immutable