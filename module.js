// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }
// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// Arrow/Fat arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

//Loop through an array of names
let userList = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 //Loop through an array of vegetables
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Loop through numbers without using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }
 