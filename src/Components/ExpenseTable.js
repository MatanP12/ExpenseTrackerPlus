import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Delete } from '@mui/icons-material';


function ExpenseTable({ expenses, handleDeleteExpense }) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center" width="1px"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{expense.description}</TableCell>
              <TableCell align="center">{expense.amount}$</TableCell>
              <TableCell align="center">{expense.creationDate.toLocaleDateString('en-GB')}</TableCell>
              <TableCell align="center">{expense.category}</TableCell>
              <TableCell >
                <IconButton onClick={() => handleDeleteExpense(expense)}>
                  <Delete />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable;