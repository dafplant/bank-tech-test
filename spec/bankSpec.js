describe("bankAccount", function() {
    account = new bankAccount();

        it("can initialize a bank account with 0", function() {
            expect(account.balance).toBe(0);
        });

        
});