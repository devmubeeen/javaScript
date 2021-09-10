console.log("welcome lec 08");

// const age = 19;
// const age = '65'; //string


// if (age == 19) {
// 	console.log('age is 19')
// } else {
// 	console.log('age is not 19')
// }
// ==================================
// if (age == 19) {
// 	console.log('age is 19')
// } else if (age === 65) {
// 	// == double equal use for only (value)
// 	// === triple equal use for (type + value) 
// 	console.log('age is 65')
// }
// else {
// 	console.log('age is not 19')
// }
// ==================================
// let age = 65;
// if (age != 19) {
// 	console.log('1Age is 19');
// }
// if (age !== 65) {
// 	console.log('2Age is not 65')
// }
// else {
// 	console.log('3age is not 19');
// }


// not equal age equal ho to false ho jy gi
// let age = 18;
// if (age != 19) {
// 	console.log('1: age is not 19');
// }
// else if (age !== '19') {
// 	console.log('2: age is not 65');
// }
// else {
// 	console.log('3: age is not 19');
// }
// ==================================
// variable check if define h ya ni h 
// // const vari = 33
// if (vari) {
// 	console.log('vari is defined')
// }

// const vari = 33;
// if (typeof vari !== 'undefined') {
// 	console.log('vari is defined');
// } else {
// 	console.log('vari is not defined');
// }


// const drive = true;
// const drive = false;

// if (drive) {
// 	console.log('i am driving');
// } else {
// 	console.log('i am not driving');
// }

// =================================
//  and opreator dono true ho gy to chaly ga

// const age = 18;
// const doseDrive = true;
// if (doseDrive && age >= 18) {
// 	console.log('you can drive');
// } else {
// 	console.log('you can not drive');
// }

// =================================
// or oprator ak be true hoga to run ho jy ga
// const age = 15;
// const doesDrive = false;

// if (doesDrive || age >= 35) {
// 	console.log('you can drive');
// } else {
// 	console.log('you can not drive');
// }

// ==================================
// tournaery oprater
// const age = 145;
// const age = 45;
// console.log(age == 45 ? 'age is 45' : 'age is not 45');
// ===================================
const age = 48;

switch (age) {
	case 48:
		console.log('your age  is 48');
		break;
	case 38:
		console.log('your age is 38');
		break;
	case 28:
		console.log('your age is 28');
		break;
	case 18:
		console.log('your age is 18');
		break;
	default:
		console.log('you age is nuknown');
		break;
}