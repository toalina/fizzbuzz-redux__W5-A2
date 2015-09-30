'use strict';

// var FizzBuzz = (

  function FizzBuzz(startNum, endNum) {
  this.startNum = startNum;
  this.endNum = endNum;
  this.result = [];

  // Assign Fizz and Buzz words
  // Display the words in HTML
  // -- Same as this.write method?
  this.read = function(startNum, endNum) {
    for (var i = startNum; i <= endNum; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.result.push("FizzBuzz");
        console.log("FizzBuzz");
      }
      else if (i % 5 === 0) {
        this.result.push("Buzz");
        console.log("Buzz");
      }
      else if (i % 3 === 0) {
        this.result.push("Fizz");
        console.log("Fizz");
      }
      else {
        this.result.push(i);
        console.log(i);
      }
    }
  };

  this.write = function(startNum, endNum) {
    document.getElementById("start").innerHTML = startNum;
    document.getElementById("end").innerHTML = endNum;
    document.getElementById("output").innerHTML = this.result;
  };

  // return Fizzbuzz;

}
// )();

var fizzbuzz = new FizzBuzz();
fizzbuzz.read(34, 100);
fizzbuzz.write();


document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  var startVal = document.getElementById("startVal").value; // input start value
  var endVal = document.getElementById("endVal").value; // input end value
  fizzbuzz.read(startVal, endVal);

  console.log(startVal);
  console.log(endVal);
});

