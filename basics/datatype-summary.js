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