console.log("welcome lectrue 06")

/*
===============================
arrays and object in js
===============================
*/

let marks = [34, 36, 38, 40, 42, 44];
// const marks = [34, 36, 38, 40, 42, 44];
const fruits = ['orange', 'apple', 'pinapple'];
const mixed = ['str', 89, [3, 5]];
const arr = new Array(22, 24, 26, 'orange');// array constracture 
// console.log(arr);
console.log(marks);
// console.log(mixed);
// console.log(fruits[2]);

console.log(arr.length);
// console.log(Array.isArray('dfdf'));// ya batata h array h ya ni ha  true array h false array ni h

arr[0] = 'mubeen';
// let arrElement = arr[0];
// console.log('element :', arrElement);// array ki value save krna variable m
// console.log(arr);
// let value = marks.indexOf(40); // konsy index pr element h
// console.log(value);

// mutating or modifying arrays
// marks.push(55);//add at end
// marks.unshift(1000); //add at start
// marks.pop();// end value removed
// marks.shift();//starting vale remove
// marks.splice(2, 4); //remove between array
// marks.reverse(); reveres all array

// =================
// two arrays to concatinate krna jorna
// let marks2 = [1, 2, 3, 4, 7]
// marks = marks.concat(marks2);
// console.log(marks)

let marks2 = [1, 2, 3, 4, 5, 6, 7]
marks = marks.concat(marks2);
console.log(marks);

// ====================
// array object plus + key values
let mjobj = {
	name: 'mubeen',
	'my lastName': 'bhatti',
	channel: 'codemubeen',
	isActive: true,
	marks: [1, 3, 5, 6, 7]
}
console.log(mjobj);
console.log(mjobj.isActive);
console.log(mjobj['channel']);
console.log(mjobj.channel)
console.log(mjobj["my lastName"]);