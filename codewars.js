// (fizzbuzz = () => {
//   for (i = 1; i < 11; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
//     else if (i % 3 === 0) console.log("fizz");
//     else if (i % 5 === 0) console.log("buzz");
//     else console.log(i);
//   }
// })();

(checkPrime = (num) => {
    if(num < 1)
    return console.log(false)
    if(num === 2 || num === 1)
    return console.log(true)
    
    let divisor = 2;
    while(num > divisor){
        if(num % divisor === 0) 
        return console.log(false);
        else divisor++;
    }
    console.log(true);
})(3)
