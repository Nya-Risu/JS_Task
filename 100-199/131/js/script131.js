let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; 
let counter = 0;
let counter1 = 0;
for (let elem of arr) {
	if (elem == 3) {
		counter++;

	}
    if (elem == 2) {
		counter1++;
	}
}
console.log(counter);
console.log(counter1);
// 2

