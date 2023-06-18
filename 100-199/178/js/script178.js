function func(obj) {
	obj.a = '!';
}
let obj = {a: 1, b: 2, c: 3};
func(obj);
console.log(obj);
// 2
function func1(arg) {
	arg = '!';
}
let obj1 = {a: 1, b: 2, c: 3};
func(obj1.a);
console.log(obj1);
// 3
function func2(obj2) {
	obj2 = '!';
}

let obj2 = {a: 1, b: 2, c: 3};
func(obj2.a);
console.log(obj2);
// 4
function func3(arr3) {
	arr3.splice(1, 1);
}

let arr3 = [1, 2, 3];
func(arr3);
console.log(arr3);
// 5
function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}
let arr = [1, 2, 3];
func(arr);
console.log(arr);