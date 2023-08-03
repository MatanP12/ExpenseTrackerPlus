let expenseId = 0;

export class Expense {
    constructor(description = "", amount = "", category = "", business = "", creationDate = new Date()) {
        return { id: expenseId++, description, amount, business, category, creationDate }
    }
}