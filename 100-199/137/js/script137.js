for (i = 1; i<=100; i++) {
    if(i%2==0){
    console.log(i);
    }
}
// 2
let str = '';
for (let i = 0; i < 10; i++) {
	str += 'x';
}
console.log(str);
// 3
let arr2 = [];

for (let i = 1; i <= 10; i++) {
	arr2.push(i);
}
console.log(arr2);
// 4
let arr = [1,2,3,4,5,6,7,8,9,11,121,13,1232];
let flag = false;
for (let elem of arr) {
	if (elem == 5) {
		flag = true;
		break;
	}
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
// 5
let arr1 = [];

for (let i = 10; i >= 1; i--) {
	arr1.push(i);
}
console.log(arr1);
// 6
let arr3 = [10, 20, 30, 50, 235, 3000];
let sum = 0;

for (let elem of arr3) {
    let num = String(arr3[i]);
    let char = num[0];
	if (char == 1 || char == 2 || char == 5) {
		sum += elem;
	}
}

console.log(sum);