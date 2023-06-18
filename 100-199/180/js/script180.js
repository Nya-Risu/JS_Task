function func() {
	return 'alec';
}
console.log(func());
console.log(func);
// 4
func = 123; // затрем переменную func
console.log(func); 
// 5
function func1() {
	return 3;
}
let func2 = func1;
console.log(func1() + func2());
// 6
let func3 = function(){
    return 1;
}
let func4 = function(){
    return 2;
}
console.log(func3() + func4());