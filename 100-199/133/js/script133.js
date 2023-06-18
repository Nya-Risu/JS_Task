let arr = [1, 2, 3, 4, 5];
for (let i = 1; i < arr.length; 
	i++) { 
	console.log(arr[i + 1] + arr[i]);
}
// 2
let arr1 = [1, 2, 3, 4, 5];

for (let i = 2; i < arr1.length; 
	i++) { 
	console.log(arr1[i - 2]);
	console.log(arr1[i - 1]);
}
// 3
let arr2 = [1, 2, 3, 4, 5];

for (let i = 2; i < arr2.length; 
	i++) { 
	console.log(arr2[i - 1] + arr2[i - 2] + arr2[i]);
}



