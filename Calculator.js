window.CompoundingInterest = function(principal, interestRate) {
  this.principal = principal;
  this.interestRate = interestRate;
  this.calculateFinalAmount = function(time, monthlyAddition) {
    var currentPrincipal = this.principal;
    for (var i = 0; i < time; i++) {
      currentPrincipal += monthlyAddition;
      currentPrincipal *= 1 + this.interestRate;
    }
    return currentPrincipal;
  };
  this.timeToZero = function(monthlyAddition) {
    var currentPrincipal = this.principal;
    var time = 0;
    while (currentPrincipal >= 0) {
      time++;
      currentPrincipal += monthlyAddition;
      currentPrincipal *= 1 + this.interestRate;
      if (currentPrincipal >= this.principal) {
        return Infinity;
      }
    }
    return time;
  };
  this.monthlyPayments = function(time) {
    var testPayment = this.calculateFinalAmount(time, 0) / time;
    var testAmount = this.calculateFinalAmount(time, testPayment);
    while (Math.abs(testAmount) < 10) {
      testPayment = testAmount > 0 ? testPayment * 1.1 : testPayment * 0.9;
      testAmount = this.calculateFinalAmount(time, testPayment);
    }
  };
};
