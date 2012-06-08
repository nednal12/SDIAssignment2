// alert("JavaScript works!");

var string1 = "I'm not good ",
	string2 = "at string manipulation. ",
	string3 = "At least not yet.";
	
var fromFunWithStrings,
	fromYearlyPaymentBreakdown,
	fromConsultWithWife;

var consultWithWife = function (atHome, goodMood) {
	var looksFavorable = (atHome && goodMood);
	
	if (looksFavorable) {
		console.log("I probably have a good chance of convincing her to buy it.");
	} else {
		console.log("It's easier to beg forgiveness than to ask permission.");
	};
	
	return looksFavorable;
};

fromConsultWithWife = consultWithWife(true, true);


var yearlyPaymentBreakdown = function (totPrice, taxRate, numberOfPayments) {

	var remainingAmount = totPrice * (1 + taxRate),
		paymentAmount = remainingAmount / numberOfPayments,
		goodThruNums = 1;
	
	while ( remainingAmount > paymentAmount ) {
		
		remainingAmount -= paymentAmount;
		var isItAFullYear = numberOfPayments % 12;
		
		if (isItAFullYear === 0) {
			console.log("There goes another " + 
			paymentAmount + " only " + remainingAmount + " to go");
		};
		
		numberOfPayments--;
	
	};

	return goodThruNums;
	
};

fromYearlyPaymentBreakdown = yearlyPaymentBreakdown(5000, 0.07, 60);

var funWithStrings = function (firstString, secondString, thirdString, someBoolean) {

	var goodThruStrings = 'Yes';
	
	if (someBoolean) {
	
		console.log(firstString + secondString + thirdString);
	
	};
	 
	return goodThruStrings;
};

fromFunWithStrings = funWithStrings(string1, string2, string3, fromConsultWithWife);