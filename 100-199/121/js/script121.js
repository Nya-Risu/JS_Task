let arr1 = [1, 2, 3, 4, 0, 5, 6];
for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] == 0) {
        break;
    } else {
        console.log(arr1[i]);
    };
};
// 2
let arr2 = [1, 2, 3, 4, -2, 5, 6];
let res2 = 0;
for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] < 0) {
        break;
    } else {
        res2 += arr2[i];
    };
};
console.log(res2)
// 3
let arr3 = [1, 2, 6, 4, 3, 5, 6];
let res3 = 0;
for (let i = 0; i <= arr3.length - 1; i++) {
    if (arr3[i] == 3) {
        console.log(i)
        break;
    } else {
        continue;
    };
};
// 4
let num4 = 1, i = 1;
for (i; ; i++) {
    if (num4 + i > 100) {
        break;
    } else {
        num4 += i;
    };
};
console.log(num4);
console.log(i);