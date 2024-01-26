const user = {
    username: "Shubham",
    level: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

const pav = () => {
    let username = "Shazam"
    console.log(this);
}
// pav()


// const addtwo = (n1, n2) => {
//     return n1 + n2
// }

// const addtwo = (n1, n2) => n1 + n2    // implicit return, then there is no need for return statement
// const addtwo = (n1, n2) => ( n1 + n2 )    // same for paranthesis
const addtwo = (n1, n2) => ({username: "Shubham"}) // to define a object it must be wrap within paranthesis

console.log(addtwo(3 ,4));