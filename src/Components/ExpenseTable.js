import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDeleteData } from '../utilities/ServerCalls';


function Row({ expense, handleDeleteExpense }) {
  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' }, maxWidth: "min-content" }} >
      <TableCell width="1" align="center" size="small">{expense.description}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.amount}$</TableCell>
      <TableCell width="1" align="center" size="small"> {expense.business}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.creationDate.toLocaleDateString('en-GB')}</TableCell>
      <TableCell width="1" align="center" size="small">{expense.category}</TableCell>
      <TableCell width="1" align="center" size="small">
        <IconButton onClick={() => handleDeleteExpense(expense)} >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

function ExpenseTable({ expenses, handleDeleteExpense }) {

  const handleDeleteData = useDeleteData("/expenses");

  function onDeleteExpnese(expense) {
    handleDeleteData(expense);
    handleDeleteExpense(expense);
  }


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
            <TableCell width="1" />
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => {
            return <Row key={expense.id} expense={expense} handleDeleteExpense={onDeleteExpnese} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ExpenseTable;