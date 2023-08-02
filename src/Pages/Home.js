import { Box, CssBaseline, Grid, Paper, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';
import ExpenseTable from "../Components/ExpenseTable";
import CreateExpense from "../Components/CreateExpense";
import { useState } from "react";
import TopBar from "../Components/TopBar";
import { Footer } from "../Components/Footer";


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


function Home() {

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
    <Box >
      <CssBaseline />
      <TopBar />
      <Toolbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
      </Box>
      <Footer />
    </Box>
  )
}

export default Home;