// ******************** filter ******************* // 

// filter: create new array with all elements that pass the test provided by a function

let age = [2, 32, 18, 12, 10, 45, 89]
let adults = age.filter(checkAge)
adults.forEach(item)
function checkAge(element) {
    return element >= 18
}
function item(element) {
    // console.log(element);
}

// ****************** with arrow function ******************* //
// let age = [2, 32, 18, 12, 10, 45, 89]
// let adults = age.filter( (checkAge) => {
//     return checkAge > 2
// })
// console.log(adults);

// reduce: reduces an array to a single value
let nums = [1, 2, 3, 4]
// let total = nums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
let total = nums.reduce( (acc, currVal) => acc + currVal, 0)     // smart code
console.log(total);