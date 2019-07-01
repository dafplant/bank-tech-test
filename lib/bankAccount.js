function bankAccount() {
    this.balance = 0;
    this.transactions = [];
};

bankAccount.prototype.addToBalance = function(money) {
    this.balance += money;
    this.transactions.push(formatDate(date), money, this.balance);
};

bankAccount.prototype.reduceBalance = function(money) {
    this.balance -= money;
    this.transactions.push(formatDate(date), money, this.balance);
};

var date = new Date();