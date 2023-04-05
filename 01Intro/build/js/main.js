"use strict";
/*
* TypeScript can be statically or dynamically typed language while JavaScript is dynamically typed language
* Statically-typed languages means that types are checked at compile time
* Dynamically-typed languages means that types are checked at run time

*/
// TypeScript can infer the type - implicit
let myName = "Ivan Bowen";
let album;
// explicit stating 
let myAge = 20;
let isHappy;
isHappy = true;
album = true;
album = 1;
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, "r"));
// union - not limited to two data types
let postId;
let isActive;
let re = /\w+/g;
