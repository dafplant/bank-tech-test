"use strict";

function bankAccount() {
    this.balance = 0;
    this.transactions = ['date       || credit  || debit  || balance'];
}

bankAccount.prototype.addToBalance = function(money) {
    this.balance += money;
    this.transactions.push(`${formatDate(date)} || ${money} || ${this.balance}`);
    this.transactions.splice(1, 0);
};

bankAccount.prototype.reduceBalance = function(money) {
    this.balance -= money;
    this.transactions.push(`${formatDate(date)} ||    || ${money} || ${this.balance}`);
    this.transactions.splice(1, 0);
};

bankAccount.prototype.bankStatement = function(){
    this.transactions.forEach(function(amount) {
        console.log(amount);
    });
};

var date = new Date();

function formatDate(date){
    var day   = (date.getDate()).toString();
    var month = (date.getMonth() + 1).toString();
    var year  = (date.getFullYear()).toString();
    return day + '/' + month + '/' + year;
};
