import deepEqual from "deep-equal";

console.log(deepEqual({ a: 123 }, { a: 123, b: "virat" })); // True
function greet(name: string) {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript"));

var foo: number = 1123;

//variable declaration
let firstname: string = "Yousuf Borna";
let lastname = "Yousuf";
console.log(firstname);
let u: any = true;
u = "string";
u = 34;

//arrays
const names: string[] = [];

names.push("Yousuf");
names.push("Rafee");
names.push("Russy");

console.log(names);

const newNames: readonly string[] = ["Yousuf", "Raha"];

console.log(newNames);

//Tuple
let ourTuple: [number, boolean, string];

ourTuple = [25, true, "Yousuf Borna"];
console.log(ourTuple);

//named tuple
let ourTupleTwo: [score: number, name: string] = [85, "Yousuf Borna"];
console.log("ourTupleTwo: ", ourTupleTwo);
//named tuple and declare it later
type tuppy = [record: number, name: string];
const Joseph: tuppy = [86, "Yousuf"];
