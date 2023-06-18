function func1() {
	return function() {
		return 1;
	};
}
function func2() {
	return function() {
		return 2;
	};
}
console.log(func1()() + func2()())
// 2
function func() {
	return function() {
		return function() {
            return function(){
                return function(){
			return '!';
                };
            };
		};
	};
}
console.log(func()()()()())
// 3
function func3(num1){
    return function(num2){
        return function(num3){
            return num1 + num2 + num3;
        }
    }
}
console.log(func3(2)(3)(4))
