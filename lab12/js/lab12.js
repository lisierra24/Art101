

// give a number, return a Hogwart's houses
//
// function sortingHat(str) {
//   len = str.length;
//   mod = len % 4;
//   if(mod == 0){
//     return "Gryffindor"
//   }
//   else if (mod==1){
//     return "Ravenclaw"
//   }
//   else if (mod==2){
//     return "Slytherin"
//   }
//   else if (mod==3){
//     return "Hufflepuff"
//   }
// }
// Lab 12 - Javascript Events and Forms
// Author: Lizeth Sierra
// Created: 02.15.2021
// (c) COpyright by Blu Corp.

function getHouse(num){
    // get the remainder divided by 4 of the length
    var ramainder = num % 4;
    // create an if else to show House
    if (remainder == 0) {
      var str = "Gryffindor";
    } else if (remainder == 1){
      var str = "Ravenclaw";
    }else if (remainder == 2){
      var str = "Hufflepuff";
    }else if (remainder == 3){
      var str = "Slytherin";
    }

};

// attach click handler to submit buttons
$("#button").click(function() {
  // get the value in the #input text box, assign a varibale name
  var name = $("#input").val()
  console.log(name);
  // get the length of the name
  var nameLenght = name.length;
  console.log(nameLength);
  //get the houses
  var house = getHouse(nameLength);
  console.log(house);
  // add house to outpput div
  $("#output").html("<h1>" + house + "</h1>");
  $("#output").removeClass("hidden");
  $("#tail-box").removeClass("hidden");

})
