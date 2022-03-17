// Write code to create a function that returns the factorial of 'num'
// factorial = multipy all whole numbers from our chosen number down to 1 
// factorials are always done at positive integers and we always stop at 1 


// when we are given that number we multiply that number by each consecutive number minus one
// until we reach number one
// we need a variable to store the factorial value
// 5 * 4 * 3 * 2 * 1

// loop in reverse? 
// as we loop through each iteration we multiply the previous value with the current value
// return value at the end 

// function factorial(num) {
//     // anything multiplied by zero equals zero so we need the starting value to be 1 
//     var result = 1;

//     for (var i = num; i > 1; i-- ) {
//         result = result * i
//     }

//     return result;
// }


// console.log(factorial(5));


// can also be done with recursion 

// recursion is when a function calls itself

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num -1)
}

console.log(factorial(5));