let str1 = 'Mavi';
let res1 = str1.slice(0) + str1.slice(-1).toUpperCase();
console.log(res1)
// 2
let str2 = 'Mavi';
let res2 = str2.slice(0, 2).toUpperCase() + str2.slice(2);
console.log(res2)
// 3
let str3 = 'London';
let res3 = str2.slice(0, 1).toLowerCase() + str2.slice(1);
console.log(res3)
// 5
let str5 = 'var_test_text';
console.log(str5)
let word1 = str5.split('_');
for (let i = 0; i <= word1.length - 1; i++) {
    word1[i] = word1[i].slice(0, 1).toUpperCase() + word1[i].slice(1);
};
str5 = word1.join('');
console.log(str5)
// 6
let str7 = 'Hello Mavi!';
let result = str7.split('').reverse().join('');
console.log(result); 