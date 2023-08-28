"use strict";

function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
  console.log(this.balance);
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
  console.log(this.balance);
};

BankAccount.prototype.getBalance = function () {
  console.log(
    `The current amount available in your balance is : ${this.balance} $`
  );
};

function SavingsAccount(accountNumber, balance, interestRate) {
  BankAccount.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log(
      `Sorry, you cannot withdraw more than your current available balance (${this.balance} $) !`
    );
  }
  BankAccount.prototype.withdraw.call(this, amount);
};

function CheckingAccount(accountNumber, balance, transactionLimit) {
  BankAccount.call(this, accountNumber, balance);
  this.transactionLimit = transactionLimit;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.withdraw = function (amount) {
  if (amount > this.transactionLimit) {
    alert(`Transaction limit exceeded !`);
  }
  BankAccount.prototype.withdraw.call(this, amount);
};

const firstAccount = new BankAccount("IO2223UB2", 1200);

const savingAccount = new SavingsAccount("CVOO110", 1200, 0.1);
savingAccount.deposit(450);
savingAccount.getBalance();
savingAccount.withdraw(2000);

const secondAccount = new CheckingAccount(`YTTA990`, 3450, 5600);
secondAccount.deposit(3500);
secondAccount.withdraw(500);
// secondAccount.withdraw(7000);

// firstAccount.deposit(1754);
// firstAccount.withdraw(582);
// console.log(firstAccount);
// firstAccount.getBalance();
