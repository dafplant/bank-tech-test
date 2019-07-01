function bankAccount() {
    this.balance = 0;
};

bankAccount.prototype.addToBalance = function(money) {
    this.balance += money;
};

bankAccount.prototype.reduceBalance = function(money) {
    this.balance -= money;
};