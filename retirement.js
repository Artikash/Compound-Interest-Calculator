function calculateTimeToZero() {
	var output = document.getElementById("outputtext");
	var outputcanvas = document.getElementById("outputcanvas").getContext("2d");
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}
	var principal = parseFloat(document.getElementById("principal").value);
	var interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
	var years = parseInt(document.getElementById("years").value, 10);
	var inflation = parseFloat(document.getElementById("inflationRate").value) / 100;
	var yearlyContributions = Array(years).fill(parseFloat(document.getElementById("yearlyAddition").value));
	yearlyContributions = yearlyContributions.concat(Array(100).fill(-document.getElementById("yearlyWithdrawal").value));
	var principalByYear = new CompoundingInterest(principal, interestRate, inflation).simulateUntilZero(yearlyContributions);
	var retirementLengthDisplay = document.createElement("p");
	retirementLengthDisplay.textContent =
		"Retirement will last: " + (principalByYear.length > 5000 ? "Indefinitely." : principalByYear.length - years - 1 + " years.");
	output.appendChild(retirementLengthDisplay);
	var incomeAtRetirement = document.createElement("p");
	incomeAtRetirement.textContent = "Income at start of retirement: $" + Math.floor(interestRate * principalByYear[years]);
	output.appendChild(incomeAtRetirement);
	outputcanvas.clearRect(0, 0, 600, 600);
	var time = principalByYear.length > 5000 ? years : principalByYear.length;
	var max = Math.max(...principalByYear.slice(0, time));
	outputcanvas.font = "12px Arial";
	outputcanvas.moveTo(0, 400);
	for (var j = 0; j < time; j++) {
    outputcanvas.lineTo(j * 600 / time, 400 - principalByYear[j] * 400 / max);
		outputcanvas.stroke();
		outputcanvas.beginPath();
		outputcanvas.arc(j * 600 / time, 400 - principalByYear[j] * 400 / max, 2, 0, 6.28);
		outputcanvas.stroke();
		outputcanvas.moveTo(j * 600 / time, 400 - principalByYear[j] * 400 / max);
	}
  outputcanvas.fillText("$" + max, 0, 12);
}
