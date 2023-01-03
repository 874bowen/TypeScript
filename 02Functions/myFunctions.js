"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
// when you want to pass 2 arguments but you need 3 params use a default value as below:
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
addTwo(5);
getUpper("Ivan");
signUpUser("ivan", "bowenivan@gmail.com", true);
loginUser("Ian", "ian@gmail.com");
