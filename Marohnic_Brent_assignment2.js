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


var sendEncryptedText = function (textMessage, encrypt) {
	var i = textMessage.length,
		textMessage2 = textMessage;
		 
	if (encrypt) {
		
		textMessage2[1] = 'a';
	};
	console.log(textMessage2);
	
};					// ends sendEncryptedText

sendEncryptedText('I love you dear', true);
