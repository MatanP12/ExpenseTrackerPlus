import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useMemo } from 'react';


function Row({ transaction }) {
  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' }, maxWidth: "min-content" }} >
      <TableCell align="left" size="small">{transaction.date.toLocaleDateString('en-GB')}</TableCell>
      <TableCell align="left" size="small">{transaction.category}</TableCell>
      <TableCell align="left" size="small">{transaction.description}</TableCell>
      <TableCell align="left" size="small"> {transaction.business}</TableCell>
      <TableCell align="right" size="small">{transaction.amount}$</TableCell>
    </TableRow>
  )
}

function TransactionsTable({ transactions }) {


  const sortedTransactions = useMemo(() => [...transactions].sort((a, b) => b.date - a.date).slice(0, 5), [transactions]);

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
          {sortedTransactions.map((transaction) => {
            return <Row key={transaction.id} transaction={transaction} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable;