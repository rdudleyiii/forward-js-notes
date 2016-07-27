function diff( x, y ) {
	var z;

	if ( x > y ) {
		let tmp = x;
		x = y;
		y = tmp;
	}

	return y - x;
}

// future me will know what the hell 'z' is for
function foo (x, y) {
	if ( x > 10 ) {
		var z = y / 2;
	} else if ( x < y ){
		var z = z + y;
	} else if( x > 100 ) {
		var z = 0;
	}
}

// console logging i will result in some strange results
function foo (x, y) {
	for (var i = 0; i < x; i++) {
		$('#btn' + i).on('click', function () {
			console.log('i: ' + i);
		});
	}
}

/// and using let instead
function foo (x, y) {
	for (let i = 0; i < x; i++) {
		$('#btn' + i).on('click', function () {
			console.log('i: ' + i);
		});
	}
}

// one last 'let' thing
function diff ( x, y ) {
	if ( x > y ) {
		{ // creates a block for block scoping
			let tmp = x;
			x = y;
			y = tmp;
		}

		// clearer when there is more code after block
	}

	return y - x;	
}


// Const is a variable that cannot be resassigned

const PI = 3.14;

const x = [ 1, 2, 3 ];
const y = Object.freeze([1,2,3]);


// pt 3
// old way of passing args in array
function foo() {
	var args = [].slice.call(arguments);
	args.shift(10);
	args.push(42);
	bar.apply(null, args)
}
// new es6 way
// assignemtn context - param list
// gathers args into array
function foo( ...args ) {
  bar( 10, ...args, 42 );
}

foo(10,42,30);

function foo( x, y, ...args ) {
  bar( 10, x, ...args, y, 42 );
}

//arrays old
var a = [1,2,3,4];
var b = [5,6];
var c = [0].concat(a,b,[7]); //[0..7]

//arrays new - spread out array
var a = [1,2,3,4];
var b = [5,6];
var c = [0, ...a, ...b, 7]; //[0..7]

//arrays new - spread out iterable. splits string
var a = [1,2,3,4];
var b = "56";
var c = [0, ...a, ...b, 7]; //[0.., "5", "6", 7]


function foo(x) {
	// if x exists, x = x, otherwise x = 10;
	// selector operators
	// but what if x is 0
	// x = x || 10;
	x = x || 10;
	x ? x: 10

	x && y
	x ? y: x;
	// old way
	x = (x !== undefined) ? x : 10;
}

//es6 default param syntax
function foo(x = 10) {
	// body...
}


function uniqueId() {
	return Math.random();
}

function foo(id = uniqueId()) {
	
}

foo( 3 ) // bar() not called
foo( null ) // bar() called
foo() // bar() called
foo( ...[] ) // bar() called


function required(paramName) {
	throw new Error(paramName + ' required!');
}

function foo( id = required("id") ) {
	
}

//
function foo(x, cb = function() { return x; } ) {
	var x = 2;
	console.log(cb()); // will return 4, not 2
}

foo(4);

//
var x = 3;
function foo(cb = function() { return x; } ) {
	var x = 2;
	console.log(cb()); // will return 3 because of x defined in outer scope
}

foo();

//
function foo(cb = function() { return x; } ) {
	var x = 2;
	console.log(cb()); // will return reference error because x is not defined in cb assignment
}

foo();


// next Topic: Destructuring

function foo() {
	return [1,2,3]
}

var temp = foo(),
	a = temp[0],
	b = temp[1],
	c = temp[2];

console.log(a,b,c)

////////////////////////es6 destructuring/////////////////////////////////////////////////////////////////
function foo() {
	return [1,2,3]
}

// it's not an array, it's a destructuring pattern
var [
	a,
	b,
	c
] = foo() || [];

console.log(a,b,c) // if foo returns error, a,b,c will be undefined

// pattern only needs to account for things you care about
function foo() {
	return [1,2,3,4]
}

var [
	a,
	b,
	c
] = foo() || [];

console.log(a,b,c); // a=1 b=2 c=3

//////////////////////////////////////
function foo() {
	return [1,2];
}

var [
	a,
	b,
	c
] = foo() || [];

console.log(a,b,c);  // a=1 b=2 c=undefined

//////////////////////////////////////
function foo() {
	return [1,2];
}

// can assign default values to deconstructed
var [
	a = 8,
	b = 9,
	c = 10
] = foo() || [];

console.log(a,b,c);  // a=1 b=2 c=10

//////////////////////////////////////
function foo() {
	return [1,2];
}

var a,b,c;

[
	a = 8,
	b = 9,
	c = 10
] = foo() || [];

console.log(a,b,c);  // a=1 b=2 c=10

//////////////////////////////////////
function foo() {
	return [1,2];
}

var obj = {};

[
	obj.a = 8,
	obj.b = 9,
	obj.c = 10
] = foo() || [];

console.log(a,b,c);  // a=1 b=2 c=10

//////////////////////////////////////
function foo() {
	return [1,2,3,4,5,6];
}

var obj = {};

[
	obj.a = 8,
	,
	,
	obj.b = 9,
	obj.c = 10
] = foo() || [];

console.log(a,b,c);  // a=1 b=4 c=5

//////////////////////////////////////
function foo() {
	return [1,2,3,4,5,6];
}

var obj = {};

[
	obj.a = 8,
	obj.b = 9,
	obj.c = 10,
	...obj.d
] = foo() || [];

console.log(a,b,c, ...obj.d);  // a=1 b=2 c=3 d=[4,5,6]

//////////////////////////////////////
function foo() {
	return [1,2,3, [4,5,6], 7];
}

var obj = {};

[
	obj.a = 8,
	obj.b = 9,
	obj.c = 10,
	[
		obj.d = 11,
		obj.e = 12
	] = [],
	obj.f = 13
] = foo() || [];

console.log(a,b,c,d,e,f);  // a=1 b=2 c=3 d=4 e=5 f=7

// destructuring objects
function foo() {
	return {
		a:1,
		b:2,
		c:3
	};
}

var {
	a,
	b,
	c
} = foo();

// default values
function food() {
	return {
		a: 1,
		b: 2,
		c: 3
	};
}

var {
	a: X = 42,
	b = 10,
	c: c
} = foo();

//sub-objects
function food() {
	return {
		a: 1,
		b: 2,
		c: 3,
		d: [4,{Z:5},6]
	};
}

var {
	a: X = 42,
	b = 10,
	c: c,
	d: [
		e,
		{
			Z: f
		} = {},
		g
	]
} = foo();


///////////////////////
function foo() {
	return [
		// {} returns undefined
	];
}

// default happens, then destructuring
[ { a = 10 } = {} ] = foo();

console.log(a)

//////////////////////
function foo() {
	return [
		a:2,
		b:3,
		c:4,
		d: [5,6,7]
	];
}

// default happens, then destructuring
[ 
	{ 
		a = 10,
		d: [
			x1,
			x2,
			x3
		],
		d: [y1, y2],
		d: D
	} = {} 
] = foo();

console.log(a, d)

/////////////////////////////////
function foo() {
	return {
		a: 2,
		b: 3,
		c: 4
	};
}

var o = {};

({
	a: o.A,
	b: o.__B,
	c: o.c
} = foo())

console.log(o)

///////////////////////////////

function foo() {
	return [
		2,
		3,
		4
	];
}

var a, b, c;

[c] = [ a, b ] = foo();
console.log(a)
console.log(b);
console.log(c);

/////////////////////////////

var a,b,c,d,e,f;

( {
	person: {
		name: a,
		age: b
	}
} =
{
	history: {
		links: [
			c,
			d,
			e
		]
	}
} = getJSONObject());

////////////////////////////

//object param destructuring

function foo({
	name, 
	age = 30, 
	phone, 
	dob
} = {},
[
	link1,
	link2,
	link3
] = []) {
	
}

foo({
	name:"Kyle", 
	age: 36,
	dob: ".."
});

///////////////////////////////////////

// real world-ish example

// not needed anymore, because we are setting defaults in our let
// var defaults = {
// 	name: 'John,
// 	age: 30
// 	dob: '1/7/1970',
// 	nicknames: [
// 		'Johnny',
// 		'JohnnyBoy'
// 	],
// };

var config = {
	age: 36,
	nicknames: [
		'Buster'
	]
};

{
	let {
		name = "John",
		age = 30,
		dob = "1/1/1970",
		nicknames: [
			nickname1: "Johnny",
			nickname2: "JohnnyBoy",
		]
	} = config;

	config = {
		name: name,
		age: age,
		dob: dob,
		nicknames: [
			nickname1,
			nickname2
		]
	};
};


// concise methods

var a = 2;

var o = {
	a, 
	b() {
		console.log(this.a) // works
	},
	c: () => {
		console.log(this.a) //does not work
	}
};

////////////////

var a = 2;
var prop = "c";

var o = {
	a, 
	b() {
		console.log(this.a) // works
	},
	 //js expression to use as prop name
	["_" + prop.toUpperCase()]: 42,
	[ prop.toUpperCase() ]() {

	},
	*d() {...},
	//concise computer generator method
	*[prop+"_"]() {

	}
};

// instead of 
o[prop] = 42


/////////////////
// concise generator
function *foo() {
	
}

// template literals

var name = "kyle",
	orderTotal = 123.94,
	shipDate = '1/1/17';

var oldMsg = name + ', your order of ' +orderTotal+ 'will be shipped on ' + shipDate;
var newMsg = `${name}, your order of ${orderTotal} will be shipped on ${shipDate}`;

console.log(newMsg);
