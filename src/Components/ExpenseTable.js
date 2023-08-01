import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ExpenseTable({ expenses }) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Category</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  )


}

export default ExpenseTable;