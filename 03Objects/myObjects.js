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
