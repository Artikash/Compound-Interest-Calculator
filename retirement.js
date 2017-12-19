function calculateTimeToZero() {
  var output = document.getElementById("output");
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  var principal = parseFloat(document.getElementById("principal").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
  var years = parseInt(document.getElementById("years").value, 10);
  var inflation = 1 + parseFloat(document.getElementById("inflationRate").value) / 100;
  var yearlyContributions = Array(years).fill(parseFloat(document.getElementById("yearlyAddition").value));
  yearlyContributions = yearlyContributions.concat(Array(100).fill(-document.getElementById("yearlyWithdrawal").value));
  for (var i = 0; i < yearlyContributions.length; i++) yearlyContributions[i] *= Math.pow(inflation, i);
  var principalByYear = new CompoundingInterest(principal, interestRate).simulateUntilZero(yearlyContributions);
  var retirementLengthDisplay = document.createElement("p");
  retirementLengthDisplay.textContent =
    "Retirement will last: " + (principalByYear.length > 5000 ? "Indefinitely." : principalByYear.length - years - 1 + " years.");
  output.appendChild(retirementLengthDisplay);
  var incomeAtRetirement = document.createElement("p");
  incomeAtRetirement.textContent = "Income at start of retirement: $" + Math.floor(interestRate * principalByYear[years] / Math.pow(inflation, years));
  output.appendChild(incomeAtRetirement);
  if (principalByYear.length < 5000) {
    for (var j = 0; j < principalByYear.length; j++) {
      var display = document.createElement("p");
      display.textContent = "Year " + j + ": $" + Math.floor(principalByYear[j] / Math.pow(inflation, j));
      output.appendChild(display);
    }
  }
}
