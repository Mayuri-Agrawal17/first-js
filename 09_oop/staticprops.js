/*The static keyword is used inside a class to define properties (variables) or methods (functions) that belong to the class itself,
NOT to individual objects created from that class.*/


class BankAccount {
  static bankName = "HDFC Bank"; // Belongs to the class itself!

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

console.log(BankAccount.bankName); // ✅ Access directly using class name
// Output: HDFC Bank

const acc1 = new BankAccount("Alice", 1000);
console.log(acc1.bankName); //❌ Error: Not accessible via object

// Explanation:
// static bankName = "HDFC Bank" → only one copy exists, shared by everyone.
// You cannot access it with acc1.bankName because it's not tied to individual objects.