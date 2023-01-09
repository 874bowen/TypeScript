// when you want things in a precise order say
// string, number, boolean

// const user: (string | number)[] = ["itb", 3]
let user: [string , number , boolean];

user = ["Ivan", 20, true];

let rgb: [number, number, number];

rgb = [255, 255, 255];

type tUser = {
   name: string
   age: number
   isMale: true
}

let Ivan: tUser = {name:"Bowen", age: 20, isMale: true}

type User = [number, string];

let Ian: User = [34, "ian@gmail.com"];

// you can change values in tuples

Ian[1] = "23";
// this is sth which is a problem in tuples
Ian.push("sjs");