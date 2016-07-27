// function foo(...args) { 
// 	return args;
// }

// function bar() {
// 	var a1 = [ 2, 4 ];
// 	var a2 = [ 6, 8, 10, 12 ];

// 	return foo(a1[0], a2[1], a2[2], a2[3]);
// }

// console.log(
// 	bar().join("") === "281012"
// );


function foo(x,y,z, ...rest) { 
	return [x, ...rest];
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo(...a1, ...a2);
	// passes in essentially (2,4,6,8,10,12)
}

console.log(
	bar().join("") === "281012"
);
