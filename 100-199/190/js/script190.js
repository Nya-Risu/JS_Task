function test() {
	let num1 = 1;
	let num2 = 2;
	return function() {
		return num1 + num2;
	}
}
let func = test();
console.log(func());
// 2
function test1() {
	let num1 = 1;
	let num2 = 2;
	return function() {
		return num1 + num2;
	}
}
console.log(test1()());
// 3
function test2() {
	let num1 = 1;
	return function() {
		return num1 + num2;
	}
}
let num2 = 2;
let func2 = test2();
console.log(func2());
// 4
function test3() {
	let num = 1;
	
	return function() {
		return num;
	}
}
let num = 2;
let func3 = test3();
console.log(func3());