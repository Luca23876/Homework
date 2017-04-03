var qfcalculator = function(a,b,c){
	var y = 2;
	var firstEquation = Math.pow(b,y) - 4*a*c;
	if(Math.pow(b,y)<4*a*c){
		var fSecondEquation = -b + Math.sqrt(firstEquation * -1);
		var fAltSecondEquation = -b - Math.sqrt(firstEquation * -1);
		var finalEquation = fSecondEquation / (2*a);
		var altFinalEquation = fAltSecondEquation / (2*a);
		return ("x = "+finalEquation+"i and "+altFinalEquation+"i");
	}else{
		var secondEquation = -b + Math.sqrt(firstEquation);
		var altSecondEquation = -b - Math.sqrt(firstEquation);
		var finalEquation = secondEquation / (2*a);
		var altFinalEquation = altSecondEquation / (2*a);
		return ("x = "+finalEquation+" and "+altFinalEquation);
	}
};
console.log(qfcalculator(4,6,3));
