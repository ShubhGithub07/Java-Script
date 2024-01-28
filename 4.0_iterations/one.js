// ******************* for loop ************************* //

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j);
    }
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 is detected`);
//         break
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is detected`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}