import { Alert, Grid, Paper, Skeleton, Snackbar, Typography } from "@mui/material";
import TransactionsTable from "../Components/TransactionsTable";
import { useGetData } from "../utilities/ServerCalls";
import { useState } from "react";
import TransactionsCharts from "../Components/TransactionsChart";
import { createGetCallback } from "../utilities/ServerCallbacks";

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
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState("");

    const isLoading = useGetData("/transactions", ...createGetCallback(setTransactions, setError));

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
                        <TransactionsCharts transactions={transactions} />
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
                                <TransactionsTable transactions={transactions} />
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