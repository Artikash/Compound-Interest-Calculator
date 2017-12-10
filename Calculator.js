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
};
