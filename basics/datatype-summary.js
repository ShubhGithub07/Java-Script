// Primitive
// 7 types : String, Numbers, Boolean, symbols, null, Undefined, BigInt

const Id = Symbol("123")
const anotherId = Symbol("123")

// console.log(Id === anotherId);

const bigNumber = 1234567894556n // use 'n' for bigInt


// Reference (Non-primitive)
// Objects, Array, Functions

const heros = ["Ironman", "Hulk", "Thor"]; // Array in '[]'
const myObj = {                    // object in '{}'
    name: "Shubham",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}

// Javascript is dynamic language

// **************************************************************************

// Types of memory
// Stack (Primitive), Heap (Non-primitive)

let myName = "Shubham"
let anotherName = myName
anotherName = "Shubh"

// console.log(myName);
// console.log(anotherName);

let user1 = {
    email: "shubham@gmail.com",
    upi: "user@sbi",
}

let user2 = user1

user2.email = "user@gmail.com"

// same reference value for both the value in heap
console.log(user1.email); // user@gmail.com
console.log(user2.email); // user@gmail.com