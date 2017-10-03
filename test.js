"use strict"

let A = ['one', 'two', 'three'];

A.forEach((elem) => console.log(elem)); //one two three

A.forEach((elem) => console.log(elem.length)); //3 3 5

let B = A.filter((elem) => elem.length < 4);
B.forEach((elem) => console.log(elem)); //one two three

let Flag_every = A.every((elem) => elem.length < 4);
console.log(Flag_every); // false

let Flag_some = A.some((elem) => elem.length < 4);
console.log(Flag_some); // true