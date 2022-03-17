// Write code to return the the number of vowels in `str`
// need to loop over string and return the vowel count




var vowelCount = function (str) {
    var result = 0;
  
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase();
  
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        result += 1;
      }
    }
  
    return result;
  };
  

