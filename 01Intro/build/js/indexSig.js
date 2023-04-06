"use strict";
/* Index Signatures and Type Assertions
- used when you don't know the exact name of the object keys but you know the shape
*/
// interface TransactionObj {
//    readonly [index: string]: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);
// Accessing it dynamically
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Chapati"]);
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Ivan",
    GPA: 4.0,
    classes: [100, 120],
};
// console.log(student.test);
// keyof creates a union type of the types in the inteface provided
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sideHustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
}
