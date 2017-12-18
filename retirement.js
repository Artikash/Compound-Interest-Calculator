function NewCompoundingInterest() {
  return new CompoundingInterest(parseFloat(document.getElementById("principal").value), parseFloat(document.getElementById("interestRate").value) / 100);
}

function calculateTimeToZero() {
  var output = document.getElementById("output");
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  var yearlyContributions = Array(parseInt(document.getElementById("years").value, 10)).fill(parseFloat(document.getElementById("yearlyAddition").value));
  yearlyContributions = yearlyContributions.concat(Array(100).fill(-document.getElementById("yearlyWithdrawal").value));
  for (var i = 0; i < yearlyContributions.length; i++) yearlyContributions[i] *= Math.pow(1.03, i);
  var principalByYear = NewCompoundingInterest().simulateUntilZero(yearlyContributions);
  var retirementLengthDisplay = document.createElement("p");
  retirementLengthDisplay.textContent =
    "Retirement will last: " +
    (principalByYear.length > 5000 ? "Indefinitely." : principalByYear.length - parseInt(document.getElementById("years").value, 10) - 1 + " years.");
  output.appendChild(retirementLengthDisplay);
  var incomeAtRetirement = document.createElement("p");
  incomeAtRetirement.textContent =
    "Income at start of retirement: $" +
    Math.floor(
      parseFloat(document.getElementById("interestRate").value) *
        0.01 *
        principalByYear[parseFloat(document.getElementById("years").value)] /
        Math.pow(1.03, parseFloat(document.getElementById("years").value))
    );
  output.appendChild(incomeAtRetirement);
  if (principalByYear.length < 5000) {
    for (var j = 0; j < principalByYear.length; j++) {
      var display = document.createElement("p");
      display.textContent = "Year " + j + ": $" + Math.floor(principalByYear[j] / Math.pow(1.03, j));
      output.appendChild(display);
    }
  }
}
