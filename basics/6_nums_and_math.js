const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

const otherNumber = 123.45495
// console.log(otherNumber.toPrecision(4));

const hundereds = 10000000
// console.log(hundereds.toLocaleString('en-IN'));


// *********************** Maths ******************//

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.5));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.7));

// console.log(Math.min(4, 1, 9, 5));
// console.log(Math.max(4, 1, 9, 5));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*12) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);