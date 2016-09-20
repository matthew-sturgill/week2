//Matt Sturgill, Izaak, 09/16/2016
//Problem 1
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var problem1 = numArray.indexOf(27);

console.log(problem1);

//Problem 2
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];
var sumArray = 0;
for (var i = 0; i< numArray.length; i++){
        sumArray = sumArray + numArray[i]; 
}
console.log(sumArray);

//Problem 3
var problem3 = [1,2,3,4,5,6,7,8,9];
console.log(problem3);

var ary2 = [];
for (var i = 1; i<=10; i++){
    ary2[i-1] = i;
}
console.log(ary2);
//Problem 4
function problem4(num1, num2){
    if ((num1 + num2) <= 25){
        return ("True");
    }else {
        return ("False");
}
}
var addNum = problem4(10, 10);
console.log(addNum);

//Problem 5
function problem5(string1, string2){
    var combo = (string1 + string2);
    if (combo.length > 12){
        return ("Error, string too long.");
    } else {
        return (combo);
    }
    }
var stringCombo = problem5("meeooowwwwww", "bark");
console.log(stringCombo);



//Problem 6
var num = 0; 
while ( num < 20 ){
    num ++
    if (num <= 5){
        console.log("Very Low Number");
    } else if (num <= 10){
        console.log("Low Number");
    } else if (num <= 15){
        console.log("High Number");
    } else if (num <= 20){
        console.log("Very High Number");
    }
}

