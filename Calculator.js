window.CompoundingInterest = function(principal, interestRate) {
  this.principal = principal;
  this.interestRate = interestRate;

  this.finalAmount = function(time, yearlyAddition) {
    var currentPrincipal = this.principal;
    for (var i = 0; i < time; i++) {
      currentPrincipal += yearlyAddition[i] || yearlyAddition[yearlyAddition.length - 1];
      currentPrincipal *= 1 + this.interestRate;
    }
    return currentPrincipal;
  };

  this.simulateUntilZero = function(yearlyAddition) {
    var principalByYear = [this.principal];
    while (principalByYear[principalByYear.length - 1] >= 0) {
      var currentPrincipal = principalByYear[principalByYear.length - 1];
      currentPrincipal += yearlyAddition[principalByYear.length - 1] || yearlyAddition[yearlyAddition.length - 1];
      currentPrincipal *= 1 + this.interestRate;
      principalByYear.push(currentPrincipal);
      if (principalByYear.length > 5000) {
        break;
      }
    }
    return principalByYear;
  };

  this.monthlyPayments = function(time) {
    var testPayment = this.finalAmount(time, [0]) / time;
    var testAmount = this.finalAmount(time, [testPayment]);
    while (Math.abs(testAmount) < 10) {
      testPayment = testAmount > 0 ? testPayment * 1.1 : testPayment * 0.9;
      testAmount = this.finalAmount(time, [testPayment]);
    }
    return testPayment;
  };
};
