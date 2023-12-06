// filename: complexCode.js
 
/* 
* This is a complex JavaScript code that demonstrates advanced object-oriented programming concepts and data manipulation techniques.
* It simulates a banking system with accounts, transactions, and various banking operations.
* Please note that this code is purely for educational purposes and may not be suitable for real-world applications.
*/
 
class Bank {
  constructor() {
    this.accounts = [];
    this.transactions = [];
  }
 
  createAccount(name, initialBalance) {
    const account = new Account(name, initialBalance);
    this.accounts.push(account);
    console.log(`Account created for ${name}`);
  }
 
  deposit(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.balance += amount;
      this.transactions.push(`+${amount} deposited to account ${accountNumber}`);
      console.log(`${amount} deposited to account ${accountNumber}`);
    } else {
      console.log(`Account ${accountNumber} not found`);
    }
  }
 
  withdraw(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      if (account.balance >= amount) {
        account.balance -= amount;
        this.transactions.push(`-${amount} withdrawn from account ${accountNumber}`);
        console.log(`${amount} withdrawn from account ${accountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${accountNumber}`);
      }
    } else {
      console.log(`Account ${accountNumber} not found`);
    }
  }
 
  transfer(fromAccountNumber, toAccountNumber, amount) {
    const fromAccount = this.getAccount(fromAccountNumber);
    const toAccount = this.getAccount(toAccountNumber);
    if (fromAccount && toAccount) {
      if (fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        this.transactions.push(`-${amount} transferred from account ${fromAccountNumber} to account ${toAccountNumber}`);
        console.log(`${amount} transferred from account ${fromAccountNumber} to account ${toAccountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${fromAccountNumber}`);
      }
    } else {
      console.log(`One or both accounts not found`);
    }
  }
 
  getAccount(accountNumber) {
    return this.accounts.find((account) => account.number === accountNumber);
  }
 
  getAllAccounts() {
    return this.accounts;
  }
 
  getAllTransactions() {
    return this.transactions;
  }
}
 
class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.number = this.generateAccountNumber();
    this.balance = initialBalance;
  }
 
  generateAccountNumber() {
    return Math.floor(Math.random() * 100000);
  }
}
 
// Usage example:
const bank = new Bank();
bank.createAccount("John Doe", 5000);
bank.deposit(12345, 2000);
bank.withdraw(12345, 1000);
bank.transfer(12345, 67890, 500);
console.log(bank.getAllAccounts());
console.log(bank.getAllTransactions());
 
// ... More code can be added to extend the functionality of the banking system