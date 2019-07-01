describe("bankAccount", function() {
    var account = new bankAccount();

        it("can initialize a bank account with 0", function() {
            expect(account.balance).toBe(0);
        });
        
        it("can add 1000 to the balance", function() {
            account.addToBalance(1000);
            expect(account.balance).toBe(1000);
        });

        it("can reduce the balance by 500", function() {
            account.reduceBalance(500);
            expect(account.balance).toBe(500);
        });
        
});