/*
Prperties methods and template literals in javaScript
*/
console.log("we are at lecture 06")

// const name = 'mubeen';
// const greeting = 'good morning';
// console.log(greeting + ' ' + name);


let html;
html = "<h1>mubeenbhatti</h1>" + "<p>this is my paragraph </p> bhatti";

// html = html.concat('this', ' ', 'string');
// console.log(html)
// console.log(html.length);
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[0]);
// console.log(html[1]);
// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('bhatti'));
// console.log(html.includes('bhatti'));
// console.log(html.substring(1, 6));
// // console.log(html.slice(-5));
// console.log(html.slice(0, 4));
// console.log(html.split(' '));
// console.log(html.repeat('bhatti', 'saab'))
console.log(html);
console.log(html.replace('mubeen', 'saab'))

/*
===============================
template letrals
===============================
*/
// let frut1 = 'oranage\'';
// let frut2 = 'apple';
// let myHtml = `Hello ${name}
// 			<h1> this is heading </h1>
// 			${frut2}
// 			<p>you like ${frut1}</p>
// 			`
// document.body.innerHTML = myHtml;

let martic = '10th class';
let inter = '12nd class';
let bacholer = '14th class';

let myHtml = `
 <h1>i pass my ${martic} and</h1>
 <h2>i passed ${inter} and</h2>
 <h3>i passed ${bacholer} and continue</h3>
`
document.body.innerHTML = myHtml