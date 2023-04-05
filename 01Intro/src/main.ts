/*
* TypeScript can be statically or dynamically typed language while JavaScript is dynamically typed language
* Statically-typed languages means that types are checked at compile time
* Dynamically-typed languages means that types are checked at run time

*/

// TypeScript can infer the type - implicit
let myName = "Ivan Bowen"

let album: any;

// explicit stating 
let myAge: number = 20;

let isHappy: Boolean;

isHappy = true;

album = true;
album = 1;

const sum = (a: number, b: string): string => {
   return a + b;
}

console.log(sum(1, "r"));