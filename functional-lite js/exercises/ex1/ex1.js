// function foo(x) {
// 	y++;
// 	z = x * y;
// }

// var y = 5, z;

// foo(20);
// z;		// 120

// foo(25);
// z;		// 175

function bar( x, y ) {
	var z;

	foo(x);
	
	return [ y, z ];

	function foo(x) {
		y++;
		z = x * y;
	}
	
}

bar( 20, 5 );

bar( 25, 6 );
