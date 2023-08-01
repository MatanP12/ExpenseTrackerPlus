let expenseId = 0;




export class Expense {
    constructor(description = "", amount = "", category = "", creationDate = new Date()) {
        return { id: expenseId++, description, amount, category, creationDate }
    }
}