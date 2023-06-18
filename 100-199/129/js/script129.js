let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] = obj[key] * 2;
}
console.log(obj);
// 2
let obj1 = {x: 1, y: 2, z: 3};
for (let key in obj1) {
	obj1[key] = obj1[key] + 1;
}
console.log(obj1);
