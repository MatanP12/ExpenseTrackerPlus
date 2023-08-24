import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function Row({ expense }) {
  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' }, maxWidth: "min-content" }} >
      <TableCell align="left" size="small">{expense.creationDate.toLocaleDateString('en-GB')}</TableCell>
      <TableCell align="left" size="small">{expense.category}</TableCell>
      <TableCell align="left" size="small">{expense.description}</TableCell>
      <TableCell align="left" size="small"> {expense.business}</TableCell>
      <TableCell align="right" size="small">{expense.amount}$</TableCell>
    </TableRow>
  )
}

function ExpenseTable({ expenses }) {

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell width="1" align="left">Date</TableCell>
            <TableCell width="1" align="left">Category</TableCell>
            <TableCell width="1" align="left">Description</TableCell>
            <TableCell width="1" align="left">Business</TableCell>
            <TableCell width="1" align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => {
            return <Row key={expense.id} expense={expense} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable;