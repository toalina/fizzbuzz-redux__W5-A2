'use strict';


(function() {
// var FizzBuzz = (
function FizzBuzz(startNum, endNum) {
  this.startNum = startNum;
  this.endNum = endNum;
  this.result = [];

  // Do the math
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

  // Write in HTML
  this.write = function(startNum, endNum) {
    document.getElementById("start").innerHTML = startNum;
    document.getElementById("end").innerHTML = endNum;
    document.getElementById("output").innerHTML = this.result;
  };
}

// })();

var fizzbuzz = new FizzBuzz();
// fizzbuzz.read(1, 20);
// fizzbuzz.write();


document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();

  var startVal = Number(document.getElementById("startVal").value); // input start value
  var endVal = Number(document.getElementById("endVal").value); // input end value
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write();

  console.log(startVal);
  console.log(endVal);
});


})();



