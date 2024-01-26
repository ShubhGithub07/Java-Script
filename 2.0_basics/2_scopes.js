function one(){
    const username = "Shubham"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Shubham"
    if (username === "Shubham") {
        const website = "youtube"
        // console.log(username + " " + website);
    }
}

console.log(addone(5));
function addone(num){
    return num + 1
}

// addtwo(5)
const addtwo = function(num){
    return num + 2
}