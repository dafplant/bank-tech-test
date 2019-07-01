function bankAccount() {
    this.balance = 0;
    this.transactions = [];
};

bankAccount.prototype.addToBalance = function(money) {
    this.balance += money;
    this.transactions.push(formatDate(date), "||", money, "||", this.balance);
};

bankAccount.prototype.reduceBalance = function(money) {
    this.balance -= money;
    this.transactions.push(formatDate(date), "||", money, "||", this.balance);
};

bankAccount.prototype.formatTransactions = function(){
    this.transactions.forEach(function(amount) {
        console.log(amount);
        return bankStatement();
    })
};

function bankStatement() {
    return [HEADER, formatDate(date), bankAccount.transactions].toString();
};

var HEADER = 'date       || credit  || debit  || balance';



var date = new Date();

function formatDate(date){
    var day   = (date.getDate()).toString();
    var month = (date.getMonth() + 1).toString();
    var year  = (date.getFullYear()).toString();
    return day + '/' + month + '/' + year;
};
