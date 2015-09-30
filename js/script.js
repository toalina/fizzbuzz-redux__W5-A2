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
    return this.result;
  };

  // Write in HTML
  this.write = function() {
    var startVal = Number(document.getElementById("startVal").value); // input start value
    var endVal = Number(document.getElementById("endVal").value);

    document.getElementById("start").innerHTML = startVal;
    document.getElementById("end").innerHTML = endVal;
    // document.getElementById("output").innerHTML = this.result;

    // createElement
    for (var i = 0; i < this.result.length; i++) {
      var span = document.createElement("span");
      var text = this.result[i];
      span.appendChild(document.createTextNode(text));
      document.getElementById("output").appendChild(span);
    }
    // var li = document.createElement("li");
    // var text = this.result[i];// each index in the this.result[]
    // li.appendChild(text);
    // document.getElementById("output").appendChild(li);
  };
}

// })();

var fizzbuzz = new FizzBuzz();

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  var startVal = Number(document.getElementById("startVal").value);
  // input start value
  var endVal = Number(document.getElementById("endVal").value);
  // input end value
  fizzbuzz.read(startVal, endVal);
  fizzbuzz.write();

  console.log(startVal);
  console.log(endVal);
  document.getElementById("startVal").value = "";
  document.getElementById("endVal").value = "";
});


})(); // End of IIFE



