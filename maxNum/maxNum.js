// write code to return the largest number in the given array

// need to compare all numbers against each other
// the first number of the array is our starting point- loop through 
// need a variable to track the current max number 
// first number is the starting point and will be starting current max number since it hasn't been compared with any other number yet
// loop through and compare current number with the current max number
// if the current number is greater than current max
// the current number becomes the current max number
// when loop is done we return the current max number 


var array = [6, 15, 2, 56, 74, 5, 10000, 74];

function maxNum(numberArray) {
    var currentMax = numberArray[0];

    for (var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] > currentMax) {
            currentMax = numberArray[i];
        }
    }
    return currentMax;

}

console.log(maxNum(array));

function minNum(numberArray) {
    var currentMin = numberArray[0];

    for (var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] < currentMin) {
            currentMin = numberArray[i];
        }
    }
    return currentMin;
}

console.log(minNum(array));