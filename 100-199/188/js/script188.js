function test() {
	let num = 1;
	function func() {
		console.log(num);
	}
	func();
}
test();
// 2
function tes1() {
	let num1 = 1;
	
	function func1() {
		console.log(num1);
	}
}
test1();
// 3
function test2() {
	let num2 = 1;
	function func2() {
		console.log(num2);
	}
	func2();
}
// 4
function test3() {
	let num3;
	function func3() {
		console.log(num3);
	}
	num3 = 1
	func3();
	
	num3 = 2
	func3();
}
test3();
// 5
function test4(num1, num2) {
	function func4() {
		console.log(num1 + num2);
	}
	func4();
}
test4(1, 2);
// 6
function test5(num) {
	function func5(localNum) {
		console.log(localNum);
	}
	func5(num);
}
test5(1);
// 7
function test6(num) {
	function func6(localNum) {
		console.log(localNum);
	}
	func6(num + 1);
}
test6(1);
// 8
function test(num) {
	function func(num) {
		console.log(num);
	}
	func(num);
}
test(1);
// 9
function test(num) {
	function func(num) {
		console.log(num);
	}
	
	num = 2;
	func(num);
}

test(1);
