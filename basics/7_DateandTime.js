let date = new Date()

// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// let newDate = new Date(2023, 0, 30)
// let newDate = new Date(2023, 0, 30, 5, 23)
let newDate = new Date("01-23-2022")
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/10000));


// **************** Array function **************//

const marvel = ["Ironman", "thor", "hulk"]
const dc = ["supperman", "batman", "flash"]

// let newHeros = marvel.concat(dc)
// console.log(newHeros);

const all_heros = [...marvel, ...dc] // use in industry
// console.log(all_heros);

const arr = [1, 2, 3, [4, 5], 6, [7, 8, [4, 5, 7]]] // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const realArr = arr.flat(Infinity)

// console.log(realArr);

// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham"));
console.log(Array.from({name: "Shubham"})); // when object is pass in array then it return's empty array, we should specify either with it's key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.