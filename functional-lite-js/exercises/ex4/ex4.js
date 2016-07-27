// #1
// function foo() { return 1; }
// function bar() { return 2; }
// #2
function add( x, y ) { return x + y; }

// #3 
function add2( fn1, fn2 ) {
	return add( fn1(), fn2() );
}
//add2( foo, bar )

// #4
function returnValFn( val ) {
	return function() {
		return val;
	}
}
//add2 (returnValFn(1), returnValFn(2))

// #5
function addn( fns ) {
	return fns.reduce( function ( composed, fn ) {
		return function() {
			return add2( composed, fn )
		}
	});

	// var list = fns.slice();
	// while ( list.length > 2 ) {
		
	// }
	// return add2( list[0], list[1] )
}

// #6
var array = [10,20,30,40,45,55,65,75];

// #7 & #8
array = array
	.filter( function( val ) {
		return val % 2 == 0;
	})
	.map( returnValFn );


console.log( addn( array ) );