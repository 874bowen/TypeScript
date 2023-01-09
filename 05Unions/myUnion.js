"use strict";
exports.__esModule = true;
// allows you to be in a situation where you aren't sure which type of data is going to come in and we don't want to use `any`
//  use union in a very clever way
var score = 33;
score = "55";
var bowen = { name: "bowen", id: 334 };
bowen = { adminname: "ivan", id: 2323 };
// function getDbId(id: number | string){
//    // making some api calls
//    console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // since the param can be a number or string we need to do validations
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, 3, "4"];
var data4 = [1, 2, 3, "4"];
var pi = 3.14;
// pi = 3.142;
console.log(data, data2, data3, data4);
var number1 = 678;
var number2 = 2334;
var result = number1 * number2;
console.log(number1 * number2);
console.log(number1 + " * " + number1 + " = " + result);
