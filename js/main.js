var quotesArray = [
	{quote:"Hunger makes a thief of any man.", by:"Pearl S. Buck"},
	{quote:"We fear the thing we want the most.", by:"Robert Anthony"},
	{quote:"The earth laughs in flowers.", by:"Ralph Waldo Emerson"},
	{quote:"There is always room at the top.", by:"Daniel Webster"},
	{quote:"We are symbols, and inhabit symbols.", by:"Ralph Waldo Emerson"},
	{quote:"The greatest pleasure of life is love.", by:"Euripides"},
	{quote:"Big Brother is watching you.", by:"George Orwell"},
	{quote:"Beware the barrenness of a busy life.", by:"Socrates"},
	{quote:"Peace begins with a smile.", by:"Mother Teresa"},
	{quote:"Above anything else, I hate to lose.", by:"Jackie Robinson"},
	{quote:"Family is the most important thing in the world.", by:"Princess Diana"},
	{quote:"Defense is superior to opulence.", by:"Adam Smith"},
	{quote:"The time is always right to do what is right.", by:"Martin Luther King, Jr."},
	{quote:"Read much, but not many books.", by:"Gustave Flaubert"},
	{quote:"One faces the future with one's past.", by:"Pearl S. Buck"},
	{quote:"Wisdom begins in wonder.", by:"Socrates"},
	{quote:"Kindness is the beginning of cruelty.", by:"Frank Herbert"},
	{quote:"We grow small trying to be great.", by:"E. Stanley Jones"},
	{quote:"Translation is the art of failure.", by:"Umberto Eco"},
	{quote:"Act quickly, think slowly.", by:"Germaine Greer"},
	{quote:"What helps people, helps business.", by:"Leo Burnett"},
	{quote:"Courage is grace under pressure.", by:"Ernest Hemingway"},
]

$(document).ready(function(){
	//console.log( "ready!" );
	refresh();
	document.getElementById("refresh").addEventListener("click", function(){
		refresh();
	});
});

function refresh(){
	var all = returnRandom();
	$(".quote-text").text(all.quote);
	$(".by-text").text(all.by);
}

function returnRandom(type) {
	var length = quotesArray.length;
	var ranNum = Math.floor(Math.random()*length);
	return quotesArray[ranNum]
}



