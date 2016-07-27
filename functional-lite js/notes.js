// Functional-Lite JS

"Once you learn Functional Programming, you forget how to teach it."
//- Douglas Crockford

// Ground up, avoid terminology
// Important of how you write your code

// write it once, and continue to read and figure out over and over
// This is bad, and we should invest time in understandability and readability
// Total cost of ownership will be much less over life of software
	// next week, next month, the readability will begin paying off.

//Side effects
	// A function relies on stuff outside the scope of itself
	// side effets are necessary though.
	// if a programs have no side effects, it's unobservable
	// updateing dom is a side effect

	// leave side effects on the outside
	// "pure functions" on the inside
	// refferential transparency

// take impure function and wrap with pure function

function impureFunction() {
	function foo(x) {
		y = y * x;
		z = y * x;
	}

	var y = 2, z = 3;

	foo(5);

	y; // 10
	z; // 50

	foo(5);
	// unintended consequences

	y; // 50
	z; // 250
}

// to do it purely with refferential transparency
function pureFunction() {
	function bar(x, y, z) {
		foo(x);
		return [y,z];

		// ******
		function foo(x) {
			y = y * x;
			z = y * x;		
		}
	}

	bar(5,2,3); //[10,50]
	bar(5,10,50); //[50, 250]
}


//exercise 1 - ex1/ex1.js

// Composition

function sum( x, y ) {
	return x + y;
}

function multi( x, y ) {
	return x * y;
}

var x_y = multi( 3, 4 );
sum( x_y, 5); // 17

// create first composition

function sum( x, y ) {
	return x + y;
}

function multi( x, y ) {
	return x * y;
}

function multiplyThenSum( x, y, z ) {
	return sum( multi( x, y ), z);
}

multiplyThenSum( 3, 4, 5 );

//////////////////////////////////

function sum( x, y ) {
	return x + y;
}

function multi( x, y ) {
	return x * y;
}

// higher order function
function composeTwoFunctions( fn1, fn2 ) {
	return function comp( arg1, arg2, arg3 ) {
		return fn2(
			fn1( arg1, arg2 ), arg3
		)
	}
}

var multandSum = composeTwoFunctions( mult, sum );

multandSum( 3, 4, 5 );

// function calcShipping(x,y,z) {
// 	return (x * y) + z;
// }
// calcShipping( 3, 4, 5 );

// Immutability

var x = 2
x++; // allowed

const y = 3;
y++; // not allowed

const z = [4,5,6];
z = 10; //not allowed
z[0] = 10; //allowed!

// bad
function doubleThemMutable(list) {
	for (var i =0; i<list.length; i++) {
		list[i] = list[i] * 2;
	}
}

var arr = [3,4,5];
doubleThemMutable(arr);

arr; // [6,8,10]

/////////////////////////////////////////

// good
function doubleThemImmutable(list) {
	var newList = [];

	for (var i =0; i<list.length; i++) {
		newList[i] = list[i] * 2;
	}
	return newList;
}

var arr = [3,4,5];
var arr2 = doubleThemImmutable(arr);

arr; // [3,4,5]
arr2; // [6,8,10]

// object immutability
var z = Object.freeze([4,5,6,[7,8,9]])
z[0] = 10; // not allowed
z[3][0] = 10 // allowed!

//Closure

// Closure is when a function 'remebers' the variables
// around it even when that function was executed elsewhere

// currying, partial application: type of closure
// currying is kind of a special case of a partial application

// partial application
// function expects 3 inputs: x,y,z
// i always pass in 10 for x
// maybe it would be convenient to create a function that assumes the 10
// taking a function that expects argumnts and partially applies them
// 'arity': how many arguments it expects
// function that already has some of its arguments set

function add( x, y ) { // x: 10, y: 32
	return x + y; // 10 + 32 = 42
}

function curryUtility( fn, ...args ) { // fn: add(), args: 10
	return function ( lastArg ) { // lastArg: 32
		return fn( ...args, lastArg ); // add(10, 32)
	}
}

var addTo10 = curryUtility( add, 10 ); //function to call, value

addTo10( 32 ); //42


// memoization
function foo2(x,y) {
	var sum;

	return function () {
		if (sum == undefined) sum = x + y;
		return sum;
	}
}
var x = foo( 3, 4 );
x();
x();

//Recursion

//to iterate
function sumIter(sum, ...nums ) {
	for (var i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
	}
	return sum;
}

sumIter(3,4,5,6,7,8,9);

//to do it recursively
// i have a problem, let us solve it with recursion
function sumRecur( sum, ...nums ) {
	if ( nums.length == 0 ) {
		return sum;
	}

	return sum + sumRecur( ...nums );
}

sumRecur( 3, 4, 5, 6, 7, 8, 9 ); // 42

// Performace of recursion
	// speed of call
	// usage of memory
		// a certain amount of memory is assigned to a function call: stack frame
		// memory allocated for:
			// -program counter for each function
			// -variables
			// -each time function is called, a new stack frame
			// is assigned


// Proper Tail Calls: PTC. An optimization.
// function call has to be the very last thing. return functionCall();
// guaranteeing nothing else happens after this function call

function sumRecur( sum, ...nums ) 
	return recur( ...nums );

	// *************************
	function recur( sum, num, ...nums ) {
		sum += num;
		if (nums.length == 0) return sum;
		return recur( sum, ...nums );
	}
}

sumRecur( 3, 4, 5, 6, 7, 8, 9 ); // 42

// and another step farther with ES6

const sumRecur = ( function() {
	return ( ...nums ) => recur( ...nums );

	// *************************
	function recur( sum, num, ...nums ) {
		sum += num;
		if ( nums.length == 0 ) return sum;
		return recur( sum, ...nums );
	}
} )();
	
sumRecur( 3, 4, 5, 6, 7, 8, 9 ); // 42

////////////////////////

// to refactor
function sumRecur( sum, num, ...nums ) {
	sum += num;
	if ( nums.length == 0 ) return sum;
	return sumRecur( sum, ..nums );
}

sumRecur( 3, 4, 5, 6, 7, 8, 9 ); // 42

// Lists