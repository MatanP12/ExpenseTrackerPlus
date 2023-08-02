import { Grid, Paper, Typography } from "@mui/material";
import CreateExpense from "../Components/CreateExpense";
import ExpenseTable from "../Components/ExpenseTable";
import { useState } from "react";

function BudgetPaper() {

    return (
        <Paper sx={{}}>
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

    function handleSaveExpense(expense) {
        setExpenses([expense, ...expenses]);
    }

    function handleDeleteExpense(expense) {
        setExpenses(expenses.filter((curr) => {
            return curr !== expense;
        }))
    }



    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                    }}
                >
                    <CreateExpense handleSaveExpense={handleSaveExpense} />
                    <ExpenseTable expenses={expenses.slice(0, 3)} handleDeleteExpense={handleDeleteExpense} />
                </Paper>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
                <BudgetPaper />
            </Grid>
        </Grid>
    )
}