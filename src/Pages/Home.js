import { AppBar, Box, Button, CssBaseline, Grid, Link, Paper, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';
import ExpenseTable from "../Components/ExpenseTable";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Matan Peretz '}
        <Link color="inherit" href="https://github.com/MatanP12/ExpenseTrackerPlus">
          GitHub Repository
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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


  function TableGrid(){

    return (
        <Grid item xs={12} md={12} lg={12}>
          <Button>
            Add new Expense
          </Button>
            <ExpenseTable/>
        </Grid>
    )
  }


  function TopBar(){
  return (
    <AppBar position="fixed">
    <Toolbar>
      <Typography component="h1" variant="h6">
        ExpenseTracker+
      </Typography>
    </Toolbar>
  </AppBar>
  )
  }

  function Home() {
    return (
      <Box >
        <CssBaseline />
        <TopBar/>
            <Toolbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {/* The body of the page */}
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <TableGrid/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={3}>
                  <BudgetPaper/>
                </Grid>

              </Grid>
            </Box>
          <Copyright/>
        </Box>
      )
  }

export default Home;