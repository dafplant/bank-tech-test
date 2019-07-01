describe("Bank Statement", function() {
    var account = new bankAccount();
    it("can return bank statement", function() {
        account.balance = 1000;
        account.reduceBalance(500);
        bankStatement();
        expect(account.balance).toBe(500);
        // expect(account.date).toBe(2019, 07, 01);
    });
})