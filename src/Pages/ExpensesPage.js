import { useDeleteData, useGetData, usePostData, usePutData } from '../utilities/ServerCalls';
import { useState } from 'react';
import { Alert, Box, Button, Container, Skeleton, Snackbar } from '@mui/material';
import ExpensesDataGrid from '../Components/ExpensesDataGrid';
import { createDeleteCallback, createGetCallback, createPostCallback, createPutCallback } from '../utilities/ServerCallbacks';
import { ExpenseDialog } from '../Components/ExpenseDialog';
import { Expense } from '../utilities/Expense';

const CREATE = "Create";
const EDIT = "Edit";

function ExpensesPage() {
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState("");
    const [selectedExpense, setSelectedExpense] = useState(new Expense());

    const [dialogState, setDialogState] = useState({
        isOpen: false,
        dialogMode: CREATE
    });

    const isLoading = useGetData("/expenses", ...createGetCallback(setExpenses, setError));
    const handleUpdateExpense = usePutData("/expenses", ...createPutCallback(setExpenses, setError));
    const handleSaveExpense = usePostData("/expenses", ...createPostCallback(setExpenses, setError));
    const handleDeleteExpense = useDeleteData("/expenses", ...createDeleteCallback(setExpenses, setError));

    function selectExpense(expense) {
        setSelectedExpense(expense);
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
                            setSelectedExpense(new Expense())
                        }}>
                            Add new Expense
                        </Button>
                        <ExpensesDataGrid expenses={expenses}
                            handleDeleteExpense={handleDeleteExpense}
                            handleEditExpense={selectExpense}
                        />
                        <ExpenseDialog open={dialogState.isOpen}
                            expense={selectedExpense}
                            handleCloseDialog={() => setDialogState({ ...dialogState, isOpen: false })}
                            handleSaveExpense={dialogState.dialogMode === CREATE ? handleSaveExpense : handleUpdateExpense}
                            setExpense={setSelectedExpense}
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

export default ExpensesPage;