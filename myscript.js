

function calculate() {
	var score = document.getElementById('gcsVerb').value * -1.315 +
	document.getElementById('gcsMot').value * -0.58 +
	document.getElementById('smokerBox').value * -0.083+
	document.getElementById('balBox').value * -0.051 +
	document.getElementById('acsBox').value * -0.022 +
	document.getElementById('sahBox').value * 0.052 +
	document.getElementById('sdhBox').value * 0.113 +
	document.getElementById('age').value * 0.994 +
	document.getElementById('iss').value * 1.462

	if (score<50){
		document.getElementById("RiskGroup").innerHTML = "Grade I (Predicted Mortality < 5%)"
	}
	else if (score<100){
		document.getElementById("RiskGroup").innerHTML = "Grade II (Predicted Mortality 5-15%)"
	}
	else if (score<150){
		document.getElementById("RiskGroup").innerHTML = "Grade III (Predicted Mortality 15-40%)"
	}
	else {
		document.getElementById("RiskGroup").innerHTML = "Grade IV (Predicted Mortality >40%)"
	}

	document.getElementById("score").innerHTML=score;
}

function sliderChange() {
   var gcsMot = document.getElementById("gcsMot").value //gets the oninput value
   var gcsVerb = document.getElementById("gcsVerb").value
   var age = document.getElementById("age").value
   var iss = document.getElementById("iss").value
   document.getElementById('gcsMotOutput').innerHTML = gcsMot //displays this value to the html page
   document.getElementById('gcsVerbOutput').innerHTML = gcsVerb //displays this value to the html page
   document.getElementById('ageOutput').innerHTML = age //displays this value to the html page
   document.getElementById('issOutput').innerHTML = iss //displays this value to the html page
   calculate()
}

function checkboxChange() {
	document.getElementById('sahBox').value = + document.getElementById('sahBox').checked
	document.getElementById('sdhBox').value = + document.getElementById('sdhBox').checked
	document.getElementById('smokerBox').value = + document.getElementById('smokerBox').checked
	document.getElementById('balBox').value = + document.getElementById('balBox').checked
	document.getElementById('acsBox').value = + document.getElementById('acsBox').checked
	calculate()
}

