
const EXPENSE = "Expense";
const INCOME = "Income"

class Transaction {
    constructor(description = "", amount = "1", category = "", business = "", date = new Date(), type = EXPENSE) {
        return { description, amount, business, category, date, type }
    }
}

export { EXPENSE, INCOME, Transaction }