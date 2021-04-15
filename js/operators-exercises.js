"use strict";

console.log('1' + 2); // result 12
console.log(typeof('1' + 2)); // result string
console.log(6 % 4); // result 2
console.log('3 + 4 is ' + 3 + 4); // result 3 + 4 is 34
// how could you make this produce the correct output?
console.log('3 + 4 is '  + (3 + 4));

console.log(0 < 0); // result false
console.log('false' == false); // result false
console.log(true == 'true'); // result false
console.log(5 >= -5); // result true
console.log(!false || false); // result true
console.log(true || "42"); // result true
console.log(!true && !false); // result false
console.log(6 % 5); // result 1
console.log(5 < 4 && 1 === 1); // result false
console.log(typeof('codeup' === 'string')); // result boolean
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup'); // result false
console.log(4 >= 0 && 1 !== '1'); // result true
console.log(6 % 3 === 0); // result true
console.log(5 % 2 !== 0); //result true