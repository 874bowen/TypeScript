"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign = {
    studentId: "1234",
    title: "Assignment 1",
    grade: 100,
};
console.log(updateAssignment(assign, { grade: 90, verified: true }));
const assignGraded = updateAssignment(assign, { grade: 56 });
// Required and readonly
const recordAssignment = (assign) => {
    return Object.assign({}, assign);
};
const assign2 = {
    studentId: "sds5432",
    title: "Final Project",
    grade: 10,
    verified: false,
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(assignVerified);
console.log(recordAssignment(Object.assign(Object.assign({}, assignVerified), { verified: true })));
const hexColorMap = {
    red: "F00",
    green: "0F0",
    blue: "00F",
};
const finalGrades = {
    Sara: "B",
    Kelly: "D",
};
const gradesData = {
    Sara: { assign1: 50, assign2: 70 },
    Kelly: { assign1: 50, assign2: 70 },
};
const score = {
    studentId: "sds5432",
    grade: 97,
};
const preview = {
    studentId: "sls4353",
    title: "Final Project",
};
// ReturnType
// type newAssign = { title : string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err);
    });
    return response;
});
fetchUsers().then((users) => {
    console.log(users);
});
