export function createGetCallback(setTransactions, setError) {
    const onSucessResponse = (data) => {
        setTransactions(
            data.map((currTransaction) => {
                return { ...currTransaction, date: new Date(currTransaction.date) }
            })
        )
    }
    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];

}

export function createPostCallback(setTransaction, setError) {
    const onSucessResponse = (newTransaction) => {
        const parsedTransaction = { ...newTransaction, date: new Date(newTransaction.date) }
        setTransaction((currTransactions) => [parsedTransaction, ...currTransactions]);
    }

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

export function createPutCallback(setTransactions, setError) {
    const onSucessResponse = (transaction) => setTransactions((currTransactions) => {
        const updatedTransaction = { ...transaction, date: new Date(transaction.date) }
        return currTransactions.map((curr) => curr.id === updatedTransaction.id ? updatedTransaction : curr);
    })

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

export function createDeleteCallback(setTransactions, setError) {
    const onSucessResponse = (transaction) => setTransactions((currTransactions) => {
        return currTransactions.filter((curr) => curr.id !== transaction.id);
    })

    const onErrorResponse = (error) => setError(error.message);

    return [onSucessResponse, onErrorResponse];
}

