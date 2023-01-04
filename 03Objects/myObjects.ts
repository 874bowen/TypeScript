const User = {
   name: "Ivan",
   email: "ivan@gmail.com",
   isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

// ERROR 
// createUser({name: "Ivan", isPaid: false, email: "ivan@gmail.com"});

// Solution 1:
let newUser = {name: "Ivan", isPaid: false, email: "ivan@gmail.com"}

createUser(newUser);

function createCourse():{name: string, price: number} {
   return {name: "reactjs", price: 399}
}
 
// Type Alliases
// if you want to use the same type more than once 
type User = {
   name: string;
   email: string;
   isActive: boolean
}

function createUser2 (user: User): User{
   return user;
}

createUser2({name: "", email: "", isActive: true})

type User3 = {
   readonly _id: string;
   name: string;
   email: string;
   isActive: boolean;
   credcardDetails?: number;
}

let myUser: User3 = {
   _id: "1e13rwkork844",
   name: "ivan",
   email: "ivan@gmail.com",
   isActive: true,
   
}
// ? allows the field to be null
// readonly values cannot be reassigned
// myUser._id = "54jti506imfp4";
myUser.name = "bowen";

// mix and match of types

type cardNumber = {
   cardnumber: string;

}

type cardDate = {
   carddate: string
}
// make a type using extisting types
type cardDetails = cardNumber & cardDate & {
   cvv: number
}

export {}