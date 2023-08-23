
export class Expense {
    constructor(description = "", amount = "1", category = "", business = "", creationDate = new Date(), income = true) {
        return { description, amount, business, category, creationDate, income }
    }
}
