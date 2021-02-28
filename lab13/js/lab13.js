// Lab 13 - Javascript Events and Forms
// Author: Lizeth Sierra
// Created: 02.25.2021
// (c) COpyright by Blu Corp.

// // Create a "FizzBuzz" function similar to how we did in class.
//
// Loop through numbers 1 to 200, listing them as you go
// for(var num=1; num <= 200; num++){
//     console.log(num);
//   // If the number is a multiple of 3, if should print "Fizz!"
//   // If the number is a multiple of 5, it should print "Buzz!"
//   // If the number is a multiple of 7, it should print "Boom!"
//   // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
//   if (num%3 == 0){
//      console.log("Fizz!")
//    }
//    if (num%5 == 0){
//      console.log("Buzz!")
//    }
//    if (num%7 == 0){
//      console.log("Boom!")
//    }
//    if (num%3 == 0 && num%5 ==0){
//      console.log("FizzBuzz!")
//    }
//    if (num%5 == 0 && num%7 ==0){
//      console.log("BuzzBoom!")
//    }
//    if (num%3 == 0 && num%7 ==0){
//      console.log("FizzBoom!")
//    }
//    if (num%3 == 0 && num%5 ==0&& num%7 ==0){
//      console.log("FizzBuzzBoom!")
//    }
//  }


var superString= ""
for(var num=1; num <= 200; num++){
  if (num % 105 == 0) {
    console.log("FizzBuzzBoom!");
    superString += num + " - FizzBuzzBoom!<br>";
  }
  else if (num % 15 == 0) {
    console.log ("FizzBuzz!");
    superString += num + " - FizzBuzz!<br>";
  }
  else if (num % 35 == 0){
    console.log("BuzzBoom!");
    superString += num + " - BuzzBoom!<br>";
  }
  else if (num % 21 == 0){
    console.log("FizzBoom!");
    superString += num + " - FizzBoom!<br>";
  }
  else if (num % 3 == 0) {
    console.log("Fizz!");
    superString += num + " - Fizz!<br>";
  }
  else if (num % 5 == 0) {
    console.log("Buzz!");
    superString += num + "- Buzz!<br>";
  }
  else if (num %7 == 0) {
    console.log("Boom!");
    superString += num + "- Boom!<br>";
  }
  else {console.log(num)
    superString += num + "<br>";
  }
};

$("#output").html(superString);







// if (num%3 == 0){
//       console.log("Fizz!")
//     }
//     if (num%5 == 0){
//       console.log("Buzz!")
//     }
//     if (num%7 == 0){
//       console.log("Boom!")
//     }
//     if (num%3 == 0 && num%5 ==0){
//       console.log("FizzBuzz!")
//     }
//     if (num%5 == 0 && num%7 ==0){
//       console.log("BuzzBoom!")
//     }
//     if (num%3 == 0 && num%7 ==0){
//       console.log("FizzBoom!")
//     }
//     if (num%3 == 0 && num%5 ==0&& num%7 ==0){
//       console.log("FizzBuzzBoom!")
//     }
//   }
// };

// $("#output").html(myFunction);
