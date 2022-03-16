// write code to return the string 'odd' if 'num' is an odd number
// and return the string 'even' if 'num' is an even number

// input number
// run function
// if number is odd return odd
// if number is even return even

// what is an even number?
// divisible by 2, has a remainder of 0
// what is an odd number?
// not divisible by 2

// use modulus operator- %
// we will be using integers
// need to check if remainder is equal to zero
// if it does equal zero it is even, if not it is odd

function oddOrEven(number) {
    if(number % 2 === 0) {
        return 'even';

    } else {
        return 'odd';
    }
}

console.log(oddOrEven(5));
console.log(oddOrEven(12));