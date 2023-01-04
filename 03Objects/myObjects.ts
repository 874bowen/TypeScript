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

export {}