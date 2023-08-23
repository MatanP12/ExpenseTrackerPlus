import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function Row({ expense }) {
  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' }, maxWidth: "min-content" }} >
      <TableCell width="1" align="center" size="small">{expense.description}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.amount}$</TableCell>
      <TableCell width="1" align="center" size="small"> {expense.business}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.creationDate.toLocaleDateString('en-GB')}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.category}</TableCell>
    </TableRow>
  )
}

function ExpenseTable({ expenses }) {

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell width="1" align="center">Description</TableCell>
            <TableCell width="1" align="center">Amount</TableCell>
            <TableCell width="1" align="center">Business</TableCell>
            <TableCell width="1" align="center">Date</TableCell>
            <TableCell width="1" align="center">Category</TableCell>
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