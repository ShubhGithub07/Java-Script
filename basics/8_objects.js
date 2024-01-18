// Object.create : is a constructor method and it forms singleton

// object literals

const sym = Symbol("key1")

const user = {
    name: "Shubham",
    [sym]: "key1",
    age: 18,
    email: "shubham@google.com",
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[sym]); // correct way
// console.log(typeof user.sym); // change it's datatype

user.email = "shubh@google.com"
// Object.freeze(user)
user.email = "shubham@google.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello user");
}

user.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingtwo());