function calculateFinalAmount() {
  document.getElementById("output").textContent =
    "$" +
    new CompoundingInterest(parseFloat(document.getElementById("principal").value), parseFloat(document.getElementById("interestRate").value) / 1200).finalAmount(
      document.getElementById("time").value * 12,
      parseFloat(document.getElementById("monthlyAddition").value)
    );
}

function calculateTimeToZero() {
  document.getElementById("time").value =
    new CompoundingInterest(parseFloat(document.getElementById("principal").value), parseFloat(document.getElementById("interestRate").value) / 1200).timeToZero(
      -parseFloat(document.getElementById("monthlyAddition").value)
    ) / 12;
}

function calculateMonthlyPayments() {
  document.getElementById("monthlyAddition").value = new CompoundingInterest(
    parseFloat(document.getElementById("principal").value),
    parseFloat(document.getElementById("interestRate").value) / 1200
  ).monthlyPayments(document.getElementById("time").value * 12);
}
