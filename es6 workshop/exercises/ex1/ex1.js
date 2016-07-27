// var x = 2, fns = [];

// (function(){
// 	var x = 5;

// 	for (var i=0; i<x; i++) {
// 		// ..
// 	}
// })();

// console.log(
// 	(x * 2) === fns[x*2]()
// );
// true

const x = 2*2;
var fns = [];

{
	const x = 5;
	for( let i = 0; i<x; i++) {
		fns[i] = function () {
			return i;
		}

		// fns.push(function () {
		// 	return i;
		// });

		// fns.push(() => i);
		// fns.push(singleParam => i);
		// fns.push( _ => ({a:2}));
		// fns.push( _ => {
		// 	try {} 
		// 	catch(){}
		// });

	}
}

console.log(
	(x) === fns[x]()
);

