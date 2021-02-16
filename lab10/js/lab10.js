// Lab 10 - Javascript Events and Forms
// Author: Lizeth Sierra
// Created: 02.15.2021
// (c) COpyright by Blu Corp.

//Output
// document.writeln("Oh hey, I've fixed your name: ",sortUserName(), "<br>");
// find the button element
buttonEl = document.getElementById("submit-button");
console.log("button element:" , buttonEl);
// add an event listener to button
buttonEl.addEventListener("click", function(){
// var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
// find the name element
nameEl = document.getElementById("user-name");
// get value from name element
var userName = nameEl.value;
// modify name
userName = userName.toLowerCase().split("").sort().reverse().join("");
console.log("user-name:", nameEl);
//find the title element
titleEl = document.getElementById("title");
// change that element
titleEl.innerText = userName;
});
