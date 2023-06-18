let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem) {
	return elem * elem;
});

console.log(result);
// 4
let arr2 = [[1, 2, 3], [4, 5, 6], 
	[7, 8, 9]]; 

let result2 = arr2.map(function(elem) {
	return elem.map(function(num) {
		return num * num;
	});
});

console.log(result2);

// 5
let arr1 = ['a', 'b', 'c', 'd', 'e'];

let result1 = arr1.map(function(elem, index) {
	return elem + index;
});

console.log(result1); 