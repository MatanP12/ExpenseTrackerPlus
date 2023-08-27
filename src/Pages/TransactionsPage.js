import { useDeleteData, useGetData, usePostData, usePutData } from '../utilities/ServerCalls';
import { useState } from 'react';
import { Alert, Button, Container, Skeleton, Snackbar } from '@mui/material';
import TransactionsDataGrid from '../Components/TransactionsDataGrid';
import { createDeleteCallback, createGetCallback, createPostCallback, createPutCallback } from '../utilities/ServerCallbacks';
import { TransactionDialog } from '../Components/TransactionDialog';
import { Transaction } from '../utilities/Transaction';

const CREATE = "Create";
const EDIT = "Edit";

function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState("");
    const [selectedTransaction, setSelectedTransaction] = useState(new Transaction());

    const [dialogState, setDialogState] = useState({
        isOpen: false,
        dialogMode: CREATE
    });

    const isLoading = useGetData("/transactions", ...createGetCallback(setTransactions, setError));
    const handleUpdateTransaction = usePutData("/transactions", ...createPutCallback(setTransactions, setError));
    const handleSaveTransaction = usePostData("/transactions", ...createPostCallback(setTransactions, setError));
    const handleDeleteTransaction = useDeleteData("/transactions", ...createDeleteCallback(setTransactions, setError));

    function selectTransaction(transaction) {
        setSelectedTransaction(transaction);
        setDialogState({
            isOpen: true,
            dialogMode: EDIT
        });
    }

    return (
        <Container>
            {
                isLoading ?
                    <>

                        < Skeleton variant="rectangular" width={80} height={40} sx={{ mb: 1 }} />

                        < Skeleton variant="rectangular" width={"100%"} height={300} />
                    </> :
                    <>

                        <Button disabled={error !== ""} onClick={() => {
                            setDialogState({
                                isOpen: true,
                                dialogMode: CREATE
                            });
                            setSelectedTransaction(new Transaction())
                        }}>
                            Add new Transaction
                        </Button>
                        <TransactionsDataGrid transactions={transactions}
                            handleDeleteTransaction={handleDeleteTransaction}
                            handleEditTransaction={selectTransaction}
                        />
                        <TransactionDialog open={dialogState.isOpen}
                            transaction={selectedTransaction}
                            handleCloseDialog={() => setDialogState({ ...dialogState, isOpen: false })}
                            handleSaveTransaction={dialogState.dialogMode === CREATE ? handleSaveTransaction : handleUpdateTransaction}
                            setTransaction={setSelectedTransaction}
                        />
                    </>

            }
            <Snackbar open={error !== ""} autoHideDuration={3000} onClose={() => setError("")}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>


        </Container>

    )

}

export default TransactionsPage;