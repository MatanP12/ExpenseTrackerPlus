
const EXPENSE = "Expense";
const INCOME = "Income";

const ANY = "All"

class Transaction {
    constructor(description = "", amount = "1", category = "", business = "", date = new Date(), type = EXPENSE) {
        return { description, amount, business, category, date, type }
    }
}

function calcTransactions(transactions) {
    const map = new Map()
    map.set(ANY, { [INCOME]: [], [EXPENSE]: [] })
    transactions.forEach((currTransaction) => {
        const currDate = currTransaction.date.toLocaleDateString('en-GB', { month: "short", year: "numeric" });
        const type = currTransaction.type;
        if (!map.has(currDate)) {
            map.set(currDate, { [INCOME]: [], [EXPENSE]: [] });
        }
        map.get(currDate)[type].push(currTransaction);
        map.get(ANY)[type].push(currTransaction);


    })
    return map;
}

export { EXPENSE, INCOME, ANY, Transaction, calcTransactions }