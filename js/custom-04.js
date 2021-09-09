/*
 Data type in js
 => Primitive dataType (Stack)
 => Reference data type (Heap) nonPrimitive dataType

primitive dataType
==================
	string____________________"mubeenbhatti"
	number____________________33
	boolean___________________true/false
	null______________________null intenatial empty value
	undefined_________________var name; iski default value undefine hogi
	symbol____________________ES6 new


reference dataType
==================
	Arrays
	Object literals
	Functions
	Dates

*/

/*
======================================
Primative data type
======================================
*/

// string
// var name = "mubeenbhatti"
let name = "mubeenbhatti"
console.log(name);
console.log("Data type is = " + (typeof name));

// number
let marks = 33;
console.log(marks);
console.log("Data type is = " + (typeof marks));


// boolean
let isDriver = true;
console.log(isDriver)
console.log("Data type is = " + (typeof isDriver));

// null
/*
null is a primative data type hota h
return boguss value 
*/
let nullVar = null;
console.log(nullVar);
console.log("Data type is = " + (typeof nullVar));

let undef = undefined
console.log(undef)
console.log("Data type is = " + (typeof undef));

/*
======================================
 Referenec DataType/ nonPrimative data type
======================================
*/


// Array 

myArr = [1, 2, 3, 4, 5, 6, false, "string"];
console.log(myArr);
console.log("Data type is = " + (typeof myArr));

// Objec Literals
let stdMarks = {
	mubeen: 999,
	ali: 10,
	noor: 33
}
console.log(stdMarks);
console.log("Data type of = " + stdMarks);


// function
function findName(params) {

}
console.log(findName);
console.log("Data type of = " + (typeof findName))


// Date

let date = new Date();
console.log(date);
console.log("Data type of = " + (typeof date))