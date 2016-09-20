for (var i = 0; i<= 3; i = i + 1){
    console.log("It's Friday!!");
}
console.log("End print");
var i = 0

while (i <=20){
    i = i + 1;
    console.log(i);
}
console.log("End print");
for (var i = 0 ; i <= 30 ; i = i + 1){
    if (i == 20){
        var x = 0;
        while (x<=0){
            x++;
            console.log("boom");
        }
        console.log("Twenty!");
    } else {
        console.log(i);
    }
}
console.log("end print");

var myNumbers= [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i < myNumbers.length; i ++){
    total = total + myNumbers[i];
    console.log(i + myNumbers);
}
console.log("end print");
var myNumbers= [1,2,3,4,5,6,7,8,9,10];
var total = 0;
for (var i = 0; i <= myNumbers.length; i ++){
    total = total + myNumbers[i];
    console.log(total);
}
console.log("end print");