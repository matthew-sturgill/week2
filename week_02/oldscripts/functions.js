function average(array){
    var totalArray = 0;
    for (var i = 0; i< array.length; i++){
        totalArray = totalArray + array[i];
    }
    return totalArray / array.length;
}
var arrayNumber= [10,20,30,40]

var bob = average(arrayNumber);
console.log(bob);
//----------//
var h = "hello";
var reverse = "";
for(var i = h.length-1; i >= 0; i --){
    reverse = reverse + h [i];
}
console.log(reverse);
