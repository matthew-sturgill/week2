/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. You should
 also deal with the off chance that we don't play at all(i.e., a lockout)
 
 */

var timesWeBeatPatriotsLastSeason = 1 ;
var timesTheyWon = 2 ;

if ( timesWeBeatPatriotsLastSeason > timesTheyWon ) {
	console.log( "We are just better at football." ) ;
} else if ( timesTheyWon > timesWeBeatPatriotsLastSeason ) {
	console.log( "Yea, well Andrew Luck was hurt." ) ;
} else if ( timesWeBeatPatriotsLastSeason == timesTheyWon ) {
	console.log( "They were really lucky." ) ;
} else if {
	console.log( "Patriots just cheat." ) ;
}