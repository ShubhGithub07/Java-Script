function sayName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayName()

// function twoNumbers(n1, n2){
//     console.log(n1 + n2);
// }

function twoNumbers(n1, n2){
    // let result = n1 + n2
    // return result

    // return n1 + n2
}

const result = twoNumbers(3, 5)
// console.log("Result: ", result);

function loginUser(username){
    return `${username} just logged in`
}
// console.log(loginUser("Shubham"));

function calculate(val1, val2, ...num){
    return num
}
// console.log(calculate(200, 23, 43, 777));

const user = {
    name: "Shubham",
    level: 199
}

function handle(anyobject){
    console.log(`Username is ${anyobject.name} and level is ${anyobject.level}`);
}
// handle(user)
handle({
    name: "Sam",
    level: 99
})