let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);
// 2
let str1 = '';
for (let i = 1; i <= 9; i++) {
	str1 += i;
}
console.log(str1);
// 3
let str2 = '';
for (let i = 9; i >= 1; i--) {
	str2 += i;
}
console.log(str2);
// 4
let str3 = '';
let str4 = '';
for (let i = 1; i <= 9; i++) {
    str4 += '-';
	str3 += i;
}
console.log(str4, str3);