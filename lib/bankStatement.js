function bankStatement(account = new bankAccount()) {
    var HEADER = 'date       || credit  || debit  || balance';
    return [HEADER, formatDate(date), account.balance].toString();
};



function formatDate(date){
    var day   = (date.getDate()).toString();
    var month = (date.getMonth() + 1).toString();
    var year  = (date.getFullYear()).toString();
    return day + '/' + month + '/' + year;
};
