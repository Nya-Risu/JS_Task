let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
// 3
let age1 = 17;
let res;

if (age1 >= 18) {
	if (age1 <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);
