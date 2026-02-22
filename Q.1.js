function BankAccount() {
  let balance = 0;

  let transactions = [];
  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit must be positive";
      }
     balance = balance +amount;
      transactions.push(`Deposited : ${balance}`);
      return `Deposited ${amount}`;
    },

    withdraw(amount){
        if(amount>balance){
            return "Insufficient Balance";
        }

        balance = balance - amount;
        transactions.push(`Withdrawn: ${amount}`);
        return `Withdrawn ${amount}`;
    },

    getBalance(){
        return balance;
    },
    
    getTransactionHistory(){
        return transactions;
    }
  };
  
}

const account = BankAccount();
console.log(account.deposit(1000));
console.log(account.withdraw(100));

console.log(account.getBalance());
console.log(account.getTransactionHistory());