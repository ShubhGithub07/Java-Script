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
console.log(Math.floor(Date.now()/10000));