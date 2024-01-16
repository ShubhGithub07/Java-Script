const accountId = 12345
let accountEmail = "shubham@google.com"
var accountPassword = "09876"
let accountState;

accountCity = "Mumbai"

// accountId = 3  // not allowed

/* prefer not to use var because of issue in block
scope and functional scope*/

accountEmail = "aca@jhg"
accountPassword = "34232"
accountCity = "Delhi"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

// console.log(accountId);