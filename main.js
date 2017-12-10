function CreateCompoundingInterest() {
  return new CompoundingInterest(
    parseFloat(document.getElementById("principal").value),
    Math.pow(1 + parseFloat(document.getElementById("interestRate").value) / 100, 1 / 12) - 1
  );
}

function calculateFinalAmount() {
  document.getElementById("output").textContent =
    "$" + CreateCompoundingInterest().finalAmount(document.getElementById("time").value * 12, parseFloat(document.getElementById("monthlyAddition").value));
}

function calculateTimeToZero() {
  document.getElementById("time").value = CreateCompoundingInterest().timeToZero(-parseFloat(document.getElementById("monthlyAddition").value)) / 12;
}

function calculateMonthlyPayments() {
  document.getElementById("monthlyAddition").value = new CreateCompoundingInterest().monthlyPayments(document.getElementById("time").value * 12);
}

