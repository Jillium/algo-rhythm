// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
// take given string
// flip it backward
// compare 
// if the same return true
// if not return false 


var isPalindrome = function(str) {
    // split string into individual letters to put in array 
    var splitString = str.split("");
    console.log(splitString)
    // reverse array order
    var reverseArray = splitString.reverse();
    console.log(reverseArray);
    // join reverse array into string
    var joinArray = reverseArray.join("");
    console.log(joinArray);

    if (joinArray === str) {
        return true;
    } else {
        return false;
    }

    

};

isPalindrome('racecar');
