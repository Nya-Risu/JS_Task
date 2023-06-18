function func(num = 5) {
	console.log(num * num);
}
func(2);
func(3);
func();
// 2
function func1(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func1(2, 3);
func1(3);
func1();
