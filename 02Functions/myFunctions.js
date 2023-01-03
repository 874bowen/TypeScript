"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// when you want to pass 2 arguments but you need 3 params use a default value as below:
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
addTwo(5);
getUpper("Ivan");
signUpUser("ivan", "bowenivan@gmail.com", true);
loginUser("Ian", "ian@gmail.com");
// function getValue(myVal: number): boolean {
//    if (myVal > 5) return true;
//    return "200 OK"
// }
var getHello = function (s) { return ""; };
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1;
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
