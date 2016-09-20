function greetings(bananas) {
  console.log("Weekend is near o.O" , bananas);
}

function helloWorld(name){
  console.log("Hello " + name);
}

helloWorld("kenn");

// challenge create a function that adds any 2 numbers together then
// return the result. 
function add(num1 , num2){
  return num1 + num2 ;
}

// var sum = 


// Write a function that return true if
// the number passed in is even, false otherwise
function isEven(num){
  return num % 2 == 0;
}
// var result = isEven(48);
// console.log(result ? "bananas" : "yogurt");


// Write a minimum function that takes two numbers 
// and returns the smaller of the two.

function smallerNumber(num1, num2){
  if(num1 < num2){
    return num1;
  } else {
    return num2;
  }
}

var minProblem = smallerNumber(93478, 983);
console.log(minProblem);

// write a function that takes in an array of numbers
// // have it return the average 
// function average(bananas){
//   console.log(bananas);
//   var totalArray = 0;
//   for ( var i = 0; i < bananas.length; i++){
//     totalArray = totalArray + array[i];

//   }
//   return totalArray / array.length;
// }
// var arrayNumbers= [10,20,30,40,66];

// var bob = average(arrayNumbers);

// console.log(bob);

// using a function, reverse the string "kentucky" then 
// write out the solution. SILVER CHALLENGE  




// Sort the numbers: [8,6,7,5,3,0,9]; GOLD CHALLENGE
var h = "hello";

var reverse = "";
 for(var i = h.length -1; i >= 0; i--){
   reverse = reverse + h[i];
   console.log(reverse);
}

 console.log(reverse);