// function mult(x,y,z) {
// 	return x * y * z;
// }

// mult(3,4,5);	// 60

// mult(3,4,5,6);	// Oops!


function multiRecur( multi, ...nums ) {
	if ( nums.length == 0 ) return multi;
	return multi * multiRecur( ...nums );
}

multiRecur( 3, 4, 5 ) // 60
multiRecur( 3, 4, 5, 6 ) // 360
multiRecur( 3, 4 ) // 4


// has issue if only 2 values
function multiRecur( product, num1, ...nums ) {
	if ( nums.length == 0 ) return product * num1;
	return product * multiRecur( num1, ...nums );
}

multiRecur( 3, 4, 5 ) // 60
multiRecur( 3, 4, 5, 6 ) // 360
multiRecur( 3, 4 ) // 12