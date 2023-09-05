import { Alert, Grid, MenuItem, Paper, Select, Skeleton, Snackbar } from "@mui/material";
import TransactionsTable from "../Components/TransactionsTable";
import { useGetData } from "../utilities/ServerCalls";
import { useMemo, useState } from "react";
import TransactionsCharts from "../Components/TransactionsChart";
import { createGetCallback } from "../utilities/ServerCallbacks";
import { Title } from "../Components/Title";
import { calcTransactions } from "../utilities/Transaction";
import { INCOME, EXPENSE, ANY } from "../utilities/Transaction";
import CategoryPieChart from "../Components/CategoryPieChart";

export default function DashBoardPage() {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState("");
    const [selectedMonth, setSelectedMonth] = useState(ANY);
    const isLoading = useGetData("/transactions", ...createGetCallback(setTransactions, setError));

    const sortedTransactions = useMemo(() => calcTransactions(transactions), [transactions]);
    const [totalIncomes, totalExpenses] = useMemo(() => {
        const res = [0, 0];
        res[0] = sortedTransactions.get(selectedMonth)[INCOME].reduce((accummulator, currIncome) => accummulator += currIncome.amount, 0);
        res[1] = sortedTransactions.get(selectedMonth)[EXPENSE].reduce((accummulator, currExpense) => accummulator += currExpense.amount, 0);
        return res;
    }, [selectedMonth, sortedTransactions])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} size="small">
                        {[...sortedTransactions.keys()].map((currDate) => {
                            return (
                                <MenuItem key={currDate} value={currDate}>
                                    {currDate}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <Title color={"#84d888"}>
                            {`Income ${totalIncomes}$`}
                        </Title>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={3}>
                        <Title color={"#9f9cdf"}>
                            {`Expense ${totalExpenses}$`}
                        </Title>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
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

                <Grid item xs={8} md={6} lg={5}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                        }}

                        elevation={3}
                    >
                        <CategoryPieChart expenses={sortedTransactions.get(selectedMonth)[EXPENSE]} />

                    </Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper
                        elevation={3}
                        sx={{ p: 2 }}>
                        {isLoading ?
                            <Skeleton variant="rectangle" width="100%" height={260} /> :
                            <TransactionsTable transactions={sortedTransactions.get(selectedMonth)[EXPENSE]} />
                        }
                    </Paper>
                </Grid>
            </Grid >
            <Snackbar open={error !== ""} autoHideDuration={3000} onClose={() => setError("")}>
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>

        </>
    )
}