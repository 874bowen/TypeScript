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
// arrays
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "bee", 123];
let mixedData = ["EDU", 2323, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars.unshift(8);
console.log(guitars);
let test = [];
// TUPLES : when you want an element type to be tied to a certain position of a list
let myTuple = ["Dave", 42, true];
let mixed = ["Ivan", 1, false];
mixed = myTuple;
// myTuple = mixed
// Objects
let myObject;
myObject = [];
console.log(typeof myObject);
const itb = {
    firstName: "Ivan",
    lastName: "Bowen",
    age: 20,
    isAlive: true,
    albums: [12324, "54wTkf34", 76],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.lastName)
        return `Hello, ${guitarist.lastName.toLowerCase()}`;
    return `Hello!`;
};
console.log(greetGuitarist(itb));
// Enums - not type-level but added to TypeScript
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
const it = {
    firstName: "Ivan",
    isActive: true,
    albums: [12324, "54wTkf34", 76],
};
// Literal types
let theGrade;
theGrade = "A";
// functions for no return
const logMessage = (message) => {
    console.log(message);
};
logMessage("some people!");
// interface mathFunction {
//    (a: number, b: number): number
// }
const subtract = (a, b) => {
    return a - b;
};
logMessage(subtract(10, 43));
// optional params
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
// default param value
const sumAll = (a = 600, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(10, 43));
logMessage(sumAll(10, 43));
logMessage(sumAll(undefined, 10, 43));
// Rest parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
// Type Never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        console.log(i);
        // if (i > 4) break;
    }
};
const checkType = (value, type) => {
    return typeof value === type ? true : false;
};
const numberOrString = (value) => {
    if (checkType(value, "string"))
        return "string";
    if (checkType(value, "number"))
        return "number";
    return createError("This should never happen");
};
logMessage(numberOrString(3));
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // type One but has value 'world'
let e = 'world';
// Narrowing
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// NB: TS believes is  either when it is concat or add so be carefull
// let nextVal: number = addOrConcat(2, 2, 'concat') as number
let nextVal = addOrConcat(2, 2, 'add');
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('img');
const ourImg = document.getElementById('img');
img.src;
myImg.src;
