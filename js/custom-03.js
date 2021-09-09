// variable is a container
// var, let, const, declared


// var name = 'harry';
// var name = `mub"ee'n`
// console.log(name)


var name = "mubeen";
var channel;
// channel = "CodeWithMubeen" =>>> undefine  variable declared but not assined value
channel = "codeWithMubeen"; // variable delcared
var marks = 33;
console.log(name, channel, marks);

/* rule for createing js variable'
1. cannot start with letter, number, $
2. are casr sensitive

var _city = 'mubeen'  private variable  obj

var $city = "mubeen"
console.log($city);
*/
var city = 'Lahore'
console.log(city);

const ownerName = 'mubeenBhatti';
// ownerName = "been" can not reassinged the const variable (erro)
console.log(ownerName);
const fruit = 'orange'
/*
{} this one is block
*/
{
	// local variable agr local ni h to global change hogi value
	// let city = 'faisalabad';
	// city = 'islamabad';
	console.log(city);
}
console.log(city);

const arr1 = [11, 22, 32, 3];
arr1.push(45, 461, 33);
// arr1 = [112] in const variable cannot reassinged array (error)
console.log(arr1);

/*
most common programming case type:
1. camleCase
2. kabab-case
3. snake_case

4. PascalCase
*/