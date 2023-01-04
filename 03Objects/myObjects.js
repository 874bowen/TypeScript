"use strict";
exports.__esModule = true;
var User = {
    name: "Ivan",
    email: "ivan@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// ERROR 
// createUser({name: "Ivan", isPaid: false, email: "ivan@gmail.com"});
// Solution 1:
var newUser = { name: "Ivan", isPaid: false, email: "ivan@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser2(user) {
    return user;
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1e13rwkork844",
    name: "ivan",
    email: "ivan@gmail.com",
    isActive: true
};
// ? allows the field to be null
// readonly values cannot be reassigned
// myUser._id = "54jti506imfp4";
myUser.name = "bowen";
