// Lab 14 - Debugging
// Author: Lizeth Sierra
// Created: 02.28.2021






// Lab 12 Debugging
// $("#button").click(function() {runSort()});
// function runSort() {
//   var name = $("#input").val();
//   var yourHouse = sortingHat(name);
//   var houseName = ["Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
//   $("#output").html("The sorting hat has sorted you into " + houseName[yourHouse]);
// }
// function sortingHat(string) {
//   var length = string.length;
//   if (length == 0){
//     return 0;
//   } else {
//     var mod = ((length % 4)+1);
//     return mod;
//   }
// }

//Lab 13 Debugging
// var superString= ""
// for(var num=1; num <= 200; num++){
//   if (num % 105 == 0) {
//     console.log("FizzBuzzBoom!");
//     superString += num + " - FizzBuzzBoom!<br>";
//   }
//   else if (num % 15 == 0) {
//     console.log ("FizzBuzz!");
//     superString += num + " - FizzBuzz!<br>";
//   }
//   else if (num % 35 == 0){
//     console.log("BuzzBoom!");
//     superString += num + " - BuzzBoom!<br>";
//   }
//   else if (num % 21 == 0){
//     console.log("FizzBoom!");
//     superString += num + " - FizzBoom!<br>";
//   }
//   else if (num % 3 == 0) {
//     console.log("Fizz!");
//     superString += num + " - Fizz!<br>";
//   }
//   else if (num % 5 == 0) {
//     console.log("Buzz!");
//     superString += num + "- Buzz!<br>";
//   }
//   else if (num %7 == 0) {
//     console.log("Boom!");
//     superString += num + "- Boom!<br>";
//   }
//   else {console.log(num)
//     superString += num + "<br>";
//   }
// };
//
// $("#output").html(superString);
