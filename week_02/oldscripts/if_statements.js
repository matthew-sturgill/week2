var bankAccount = 1300;
var debt = 700;
var Difference = bankAccount - debt;
 

if (bankAccount >= debt) {
    console.log("Can pay debt with " + Difference + " dollars left over.");
} else{
    console.log("You cannot pay debt");
}
