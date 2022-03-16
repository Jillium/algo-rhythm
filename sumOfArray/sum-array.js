// write code to add all the numbers in 'arr' and return the total

// [5, 9, 3, 7, 4]
// need to go through each element in the array and keep a running total and store in the computer memory
// need a variable to store our sum
// need to loop through the array to add each number
// when loop is done return the sum

function sumArray(array) {
   var sum = 0
   // start with zero to have a starting point

   for (var i = 0; i < array.length; i++) {
    // what is the value at index[i]. add it to the sum variable 
        sum += array[i];
   }
   return sum;
}

var numbersArray = [5, 9, 3, 7, 4];

console.log(sumArray(numbersArray));