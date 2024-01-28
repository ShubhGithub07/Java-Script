let myArr = ['ironman', 'thor', 'hulk', 'spiderman']

let arr = 0
while (arr < myArr.length) {
    // console.log(`Value is ${myArr[arr]}`);
    arr ++
}

let score = 11
do {
    // console.log(`Score is ${score}`);
    score ++
} while (score <= 10);


// ******************* higher Order loops ****************** //

// for of
let price = [5, 3, 6, 7, 12]

for (const i of price) {
    // console.log(i);
}

// Map
const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

let num = [1, 2, 3, 4, 5]
let squares = num.map(square)
squares.forEach(print);
function square(print) {
    return Math.pow(print,2)
}
function print(print) {
    // console.log(print);
}


// foreach
const array1 = ['a', 'b', 'c'];

// array1.forEach((print) => console.log(print));


// for in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}