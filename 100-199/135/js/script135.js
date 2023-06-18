let arr = {a: 10, b: 20, c: 30, d: 40, e: 50}; 
let sum = 0;

for (let elem of arr) {
	if (+elem[0] === +elem[1] + 1) {
		sum += +elem; 
	}
}

console.log(sum);