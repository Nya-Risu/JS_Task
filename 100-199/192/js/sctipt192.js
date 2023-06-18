!function() {
	console.log('!');
}();
// 2
+function() {
	console.log('!');
}();
// 3
let result = function() {
	return '!';
}();
console.log(result);
// 4
let result1 = function() {
	return '!';
};
console.log(result1);
// 5
let result2 = function() {
	return '!';
};
console.log(result2());
// 6
let result3 = function() {return 1;}() 
	+ function() {return 2;}(); 
console.log(result3);
// 7
let result4 = (function() {
	return '!';
}());
console.log(result4);
// 8
let result5 = (function() {
	return '!';
})();
console.log(result5);
// 9
let result6 = (function() {
	return '!';
});
console.log(result6);
// 10
(function(num1, num2) {
	console.log(num1 + num2);
})(1, 2);
// 11
let str = 'str';
(function() {
	console.log(1);
})();
