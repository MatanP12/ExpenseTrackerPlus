export function createGetCallback(setExpenses, setError) {
    const onSucessResponse = (data) => {
        setExpenses(
            data.map((currExpense) => {
                return { ...currExpense, creationDate: new Date(currExpense.creationDate) }
            })
        )
    }
    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];

}

export function createPostCallback(setExpense, setError) {
    const onSucessResponse = (newExpense) => {
        const parsedExpense = { ...newExpense, creationDate: new Date(newExpense.creationDate) }
        setExpense((currExpenses) => [parsedExpense, ...currExpenses]);
    }

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

export function createPutCallback(setExpenses, setError) {
    const onSucessResponse = (expense) => setExpenses((currExpenses) => {
        const updatedExpense = { ...expense, creationDate: new Date(expense.creationDate) }
        console.log(updatedExpense);
        return currExpenses.map((curr) => curr.id === updatedExpense.id ? updatedExpense : curr);
    })

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

export function createDeleteCallback(setExpenses, setError) {
    const onSucessResponse = (expense) => setExpenses((currExpenses) => {
        return currExpenses.filter((curr) => curr.id !== expense.id);
    })

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

