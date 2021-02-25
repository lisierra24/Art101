// Lab 13 - Javascript Events and Forms
// Author: Lizeth Sierra
// Created: 02.15.2021
// (c) COpyright by Blu Corp.

// // Create a "FizzBuzz" function similar to how we did in class.
//
// Loop through numbers 1 to 200, listing them as you go
for(var num=1; num <= 200; num++){
    console.log(num);
  // If the number is a multiple of 3, if should print "Fizz!"
  // If the number is a multiple of 5, it should print "Buzz!"
  // If the number is a multiple of 7, it should print "Boom!"
  // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
  if (num%3 == 0){
     console.log("Fizz!")
   }
   if (num%5 == 0){
     console.log("Buzz!")
   }
   if (num%7 == 0){
     console.log("Boom!")
   }
   if (num%3 == 0 && num%5 ==0){
     console.log("FizzBuzz!")
   }
   if (num%5 == 0 && num%7 ==0){
     console.log("BuzzBoom!")
   }
   if (num%3 == 0 && num%7 ==0){
     console.log("FizzBoom!")
   }
   if (num%3 == 0 && num%5 ==0&& num%7 ==0){
     console.log("FizzBuzzBoom!")
   }
 }

// // Make it so the output of your program appears in your output div.
// $("#output").append("<p>" + tempFizz + "</p>")
$( ".target" ).show();
