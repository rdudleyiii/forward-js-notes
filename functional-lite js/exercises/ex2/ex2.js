function sum( x, y ) {
	return x + y;
}

function foo(fn1) {
	return function( arg1, arg2 ) {
		return fn1( arg1, arg2 )
	}
}

var x = foo(sum);

x( 3, 4 ); // 7
x( 6, 1 ); // 7

// another way
function foo2(x,y) {
	return function () {
		return x+y;
	}
}
var x = foo( 3, 4 );
x();
x();