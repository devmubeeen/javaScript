// type conversion and coercion



/*
====================================
Type conversion
====================================
*/
console.log('welcome to lecture 05');
let myVar;
// myVar = 34; // change data type  use string function
myVar = String(34);
console.log(myVar, (typeof myVar));

// let booleanVar = true;
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));


let date = String(new Date());
console.log(date, (typeof date));

// let arr = [1, 2, 3, 4, 5];
let arr = String([1, 2, 3, 4, 5, 6, 7,]);
// console.log(arr.length, (typeof arr));

let i = 8;
// console.log(i.toString());

// let stri = Number("1231ss4"); NaN not a number
let stri = Number(123456);
// stri = Number(true);
stri = (false);
// stri = Number([1, 2, 3, 4, 5, 6]); NaN not a number
// stri = Number(ture);
console.log(stri, (typeof stri));

// let number = toString(34);
// let number = parseInt('34.111'); show interger value
let number = parseFloat('34.111'); //show float value
// let number = Number('38.111'); show float value
// let number = parseInt(33);
console.log(number.toFixed(3), (typeof number));

/*
====================================
Type coercion
====================================
*/

// let myStr = "1000";
// let myNum = 12;
// console.log(myStr + myNum);

let myStr = Number("1000");
let myNum = 12;
console.log(myStr + myNum)