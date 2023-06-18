let arr1 = ['пн', 'вт', 'ср', 'чт', 
	'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i <= 8; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);
// 2
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
let obj2 = {};
for (let i = 0; i <= 5; i++) {
    if (obj1[value] % 2 == 0){
	obj[obj1[i]] = obj2[i];
    }
}
console.log(obj2);