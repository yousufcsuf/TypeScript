"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deep_equal_1 = __importDefault(require("deep-equal"));
console.log((0, deep_equal_1.default)({ a: 123 }, { a: 123, b: "virat" })); // True
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("TypeScript"));
var foo = 1123;
//variable declaration
let firstname = "Yousuf Borna";
let lastname = "Yousuf";
console.log(firstname);
let u = true;
u = "string";
u = 34;
//arrays
const names = [];
names.push("Yousuf");
names.push("Rafee");
names.push("Russy");
console.log(names);
const newNames = ["Yousuf", "Raha"];
console.log(newNames);
//Tuple
let ourTuple;
ourTuple = [25, true, "Yousuf Borna"];
console.log(ourTuple);
//named tuple
let ourTupleTwo = [85, "Yousuf Borna"];
console.log("ourTupleTwo: ", ourTupleTwo);
const Joseph = [86, "Yousuf"];
