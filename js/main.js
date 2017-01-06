var quotesArray = [
	{quote:"Hunger makes a thief of any man.", by:"Pearl S. Buck"},
	{quote:"We fear the thing we want the most.", by:"Robert Anthony"},
	{quote:"The earth laughs in flowers.", by:"Ralph Waldo Emerson"},
	{quote:"1", by:"1"}
]

$(document).ready(function(){
	//console.log( "ready!" );
	var all = returnRandom();
	$(".quote-text").text(all.quote);
	$(".by-text").text(all.by);
});


function returnRandom(type) {
	var length = quotesArray.length;
	var ranNum = Math.floor(Math.random()*length);
	return quotesArray[ranNum]
}



