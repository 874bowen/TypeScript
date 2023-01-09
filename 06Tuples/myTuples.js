// when you want things in a precise order say
// string, number, boolean
// const user: (string | number)[] = ["itb", 3]
var user;
user = ["Ivan", 20, true];
var rgb;
rgb = [255, 255, 255];
var Ivan = { name: "Bowen", age: 20, isMale: true };
var Ian = [34, "ian@gmail.com"];
// you can change values in tuples
Ian[1] = "23";
// this is sth which is a problem in tuples
Ian.push("sjs");
