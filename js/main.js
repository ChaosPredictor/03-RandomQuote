var quotesArray = [
	{quote:"Hunger makes a thief of any man.", by:"Pearl S. Buck"},
	{quote:"We fear the thing we want the most.", by:"Robert Anthony"},
	{quote:"The earth laughs in flowers.", by:"Ralph Waldo Emerson"},
	{quote:"1", by:"1"}
]

$(document).ready(function(){
	console.log( "ready!" );
	$(".quote-text").text(quotesArray[0].quote);
	$(".by-text").text(quotesArray[0].by);
});



