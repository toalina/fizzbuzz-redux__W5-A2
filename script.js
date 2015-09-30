'use strict';

// On FORM submit, this stuff happens
// document.getElementById("form").submit();

function FizzBuzz() {
  // Array with start number
  var array = [x];
  var x;
  var y;

  // Read method accept 2 values
  // -- A start and an end
  this.read = function(x, y) {
    while (x < y) {
      x++;
      array.push(x);
    }
    console.log(array);
    return array;
  };

  // Goes through the loop and does the fizzbuzz thing
  this.assignWord = function() {
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        console.log("FizzBuzz");
      } else if (array[i] % 5 === 0) {
        console.log("Buzz");
      } else if (array[i] % 3 === 0) {
        console.log("Fizz");
      } else {
       console.log(array[i]);
      }
    }
    return array;
  };

  // Write method take the output of FizzBuzz program
  // and inject into the HTML page
  // Must clear output target when writing new code.
  // Must display the start and end values
  var output;

  this.write = function() {


    // Write the x and y
    var elStart = document.getElementById("start");
    elStart.textContent = x;
    var elEnd = document.getElementById("end");
    elEnd.textContent = y;
    var elOutput = document.getElementById("output");
    elOutput.textContent = array;
  };

  // BONUS: User can append content

}

var fizzbuzz = new FizzBuzz();
fizzbuzz.read(2, 100);
fizzbuzz.assignWord();
fizzbuzz.write();


// FROM PREVIOUS HW
for (var x = 1; x < 101; x++) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("FizzBuzz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else {
   console.log(x);
  }
}

// FROM PREVIOUS HW
function count (x, y) {
  var array = [x];
  while (x < y) {
    x++;
    array.push(x);
  }
  console.log(array);
  return array;
}
count(2, 7);
count(12, 17);
