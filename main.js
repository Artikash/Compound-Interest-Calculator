function calculateFinalAmount() {
  document.getElementById("output").textContent = "$" +
    new CompoundingInterest(
      parseFloat(document.getElementById("principal").value),
      parseFloat(document.getElementById("interestRate").value) / 1200
    ).calculateFinalAmount(document.getElementById("time").value * 12, parseFloat(document.getElementById("monthlyAddition").value));
}

function calculateTimeToZero() {
  document.getElementById("output").textContent =
    new CompoundingInterest(parseFloat(document.getElementById("principal").value), parseFloat(document.getElementById("interestRate").value) / 1200).timeToZero(
      -parseFloat(document.getElementById("monthlyAddition").value)
    ) / 12 + "years";
}
