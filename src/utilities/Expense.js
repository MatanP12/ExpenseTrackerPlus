
export class Expense {
    constructor(description = "", amount = "", category = "", business = "", creationDate = new Date()) {
        return { description, amount, business, category, creationDate }
    }
}
