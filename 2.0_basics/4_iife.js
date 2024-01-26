   // Immediately invoked function expressions (IIFE)

(function soda(){
    console.log("DB CONNECTED");   // named iife
})();   // ':' is used end the first code so that it does'nt gives the error

( (name) => {                      // unnamed iife with parameters
    console.log(`DB CONNECTED TWO ${name}`);
})("Shubham")