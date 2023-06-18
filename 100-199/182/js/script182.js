function func() {
	console.log('!');
}
// 2
let func = function() {
	console.log('!');
}
// 3
+function() {
	console.log('!');
}
// 4
!function func() {
	console.log('!');
}
// 5
-function func() {
	console.log('!');
}
// 6
1 + function func() {
	console.log('!');
}
// 7
(function func() {
	console.log('!');
})
// 8
console.log(
	function() {
		console.log('!');
	}
);
