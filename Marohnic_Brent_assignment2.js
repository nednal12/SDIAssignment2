// alert("JavaScript works!");


var consultWithWife = function (atHome, goodMood) {
	var looksFavorable = (atHome && goodMood);
	
	if (looksFavorable) {
		console.log("I probably have a good chance of convincing her to buy it.");
	} else {
		console.log("It's easier to beg forgiveness than to ask permission.");
	};
	
	return looksFavorable;
};

var goLookOrGoHome = consultWithWife(true, true);

console.log(goLookOrGoHome);


var figureOutPayments = function (totPrice, taxRate, numberOfPayments) {

	var remainingAmount = totPrice * (1 + taxRate),
		paymentAmount = remainingAmount / numberOfPayments;
	
	while ( remainingAmount > paymentAmount ) {
		
		remainingAmount -= paymentAmount;
		var isItAFullYear = numberOfPayments % 12;
		
		if (isItAFullYear === 0) {
			console.log("There goes another " + 
			paymentAmount + " only " + remainingAmount + " to go");
		};
		
		numberOfPayments--;
	
	};

};

figureOutPayments(5000, 0.07, 60);