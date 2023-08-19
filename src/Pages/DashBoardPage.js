import { Alert, Grid, Paper, Skeleton, Snackbar, Typography } from "@mui/material";
import CreateExpense from "../Components/CreateExpense";
import ExpenseTable from "../Components/ExpenseTable";
import { useGetData } from "../utilities/ServerCalls";
import { useState } from "react";
import ExpensesCharts from "../Components/ExpensesChart";

function BudgetPaper() {

    return (
        <Paper elevation={3} sx={{ height: 240, }}>
            <Typography variant="h3">
                Your Monthly budget is 1000$
            </Typography>
            <Typography variant="h4">
                as for {new Date().toDateString()}
            </Typography>
        </Paper>
    )
}

export default function DashBoardPage() {
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState("");


    function handleGetExpenses(data) {
        const newData = data.map((currExpnese) => {
            return { ...currExpnese, creationDate: new Date(currExpnese.creationDate) }
        })

        newData.sort((ex1, ex2) => ex2.creationDate - ex1.creationDate);

        setExpenses(newData);
    }

    function handleGetError(err) {
        setError(err.message);
    }

    const isLoading = useGetData("/expenses", handleGetExpenses, handleGetError);

    function handleSaveExpense(expense) {
        setExpenses([...expenses, expense]);
    }

    function handleDeleteExpense(expense) {
        setExpenses(expenses.filter((curr) => {
            return curr.id !== expense.id
        }))
    }

    return (
        <>

            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={8}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                        elevation={3}
                    >
                        <ExpensesCharts expenses={expenses} />
                    </Paper>
                </Grid>

                <Grid item xs={8} md={6} lg={4}>
                    <BudgetPaper />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper
                        elevation={3}
                        sx={{ p: 2 }}>
                        {isLoading ?
                            <Skeleton variant="rectangle" width="100%" height={260} /> :
                            <>
                                <CreateExpense handleSaveExpense={handleSaveExpense} />
                                <ExpenseTable expenses={expenses} handleDeleteExpense={handleDeleteExpense} />
                            </>
                        }
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar open={error !== ""} autoHideDuration={3000} onClose={() => setError("")}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </>
    )
}