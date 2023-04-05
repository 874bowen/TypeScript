/*
* TypeScript can be statically or dynamically typed language while JavaScript is dynamically typed language
* Statically-typed languages means that types are checked at compile time
* Dynamically-typed languages means that types are checked at run time

*/

// TypeScript can infer the type - implicit
let myName = "Ivan Bowen";

let album: any;

// explicit stating
let myAge: number = 20;

let isHappy: Boolean;

isHappy = true;

album = true;
album = 1;

const sum = (a: number, b: string): string => {
	return a + b;
};

console.log(sum(1, "r"));
// union - not limited to two data types
let postId: number | string;
let isActive: number | Boolean;

let re: RegExp = /\w+/g;

// arrays
let stringArr: string[] = ["one", "two", "three"];

let guitars: (string | number)[] = ["Strat", "bee", 123];

let mixedData: (string | number | Boolean)[] = ["EDU", 2323, true];

stringArr[0] = "John";

stringArr.push("hey");

guitars.unshift(8);
console.log(guitars);

let test = [];

// TUPLES : when you want an element type to be tied to a certain position of a list
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["Ivan", 1, false];

mixed = myTuple;

// myTuple = mixed

// Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);

interface Guitarist {
	firstName: string;
	lastName?: string;
	age: number;
	isAlive?: boolean;
	albums: (string | number)[];
}
const itb: Guitarist = {
	firstName: "Ivan",
	lastName: "Bowen",
	age: 20,
	isAlive: true,
	albums: [12324, "54wTkf34", 76],
};

const greetGuitarist = (guitarist: Guitarist): string => {
	if (guitarist.lastName) return `Hello, ${guitarist.lastName.toLowerCase()}`;
	return `Hello!`;
};

console.log(greetGuitarist(itb));

// Enums - not type-level but added to TypeScript

enum Grade {
	U,
	D,
	C,
	B,
	A,
}

console.log(Grade.U);

// Type alliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];
type Pianist = {
	firstName?: string;
	isActive: boolean;
	albums: stringOrNumberArray;
};

const it: Pianist = {
	firstName: "Ivan",
	isActive: true,
	albums: [12324, "54wTkf34", 76],
};

// Literal types
let theGrade: "A" | "B" | "C";
theGrade = "A";

// functions for no return
const logMessage = (message: any): void => {
	console.log(message);
};

logMessage("some people!");

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//    (a: number, b: number): number
// }

const subtract: mathFunction = (a: number, b: number) => {
	return a - b;
};

logMessage(subtract(10, 43));

// optional params

const addAll = (a: number, b: number, c?: number) => {
	if (typeof c !== "undefined") return a + b + c;
	return a + b;
};

// default param value
const sumAll = (a: number  = 600, b: number, c: number = 2) => {
	return a + b + c;
};

logMessage(addAll(10, 43));
logMessage(sumAll(10, 43));
logMessage(sumAll(undefined, 10, 43));

// Rest parameters
const total = (a:number, ...nums: number[]): number => {
	return nums.reduce((prev, curr) => prev + curr)
}

logMessage(total(1, 2, 3, 4))