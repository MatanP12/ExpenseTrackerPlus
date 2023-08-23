import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useMemo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Container, TableContainer } from '@mui/material';


export default function ExpensesDataGrid({ expenses, handleDeleteExpense, handleEditExpense }) {

    const columns = useMemo(() => [
        {
            field: 'creationDate', headerName: 'Date', type: 'date', minWidth: 150,
            valueFormatter: (param) => { return param.value.toLocaleDateString('en-GB') }
        },
        { field: 'category', headerName: 'Category', flex: 0.1 },
        { field: 'description', headerName: 'Description', flex: 0.1 },
        { field: 'business', headerName: 'Business', flex: 0.1 },
        { field: 'amount', headerName: 'Amount', flex: 0.2, valueFormatter: (param) => { return param.value + ' $' } },
        {
            field: "actions", type: 'actions', width: 100, getActions: (params) => [
                <GridActionsCellItem label="Delete" icon={<DeleteIcon />} onClick={() => handleDeleteExpense(params.row)} />,
                <GridActionsCellItem label='Edit' icon={<EditIcon />} onClick={() => handleEditExpense(params.row)} />
            ]
        },

    ], []);


    return (
        <Box width={"100%"} >


            <DataGrid
                // sx={{
                //     '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': { display: 'none' },
                // }}

                rows={expenses}
                columns={columns}
                pageSizeOptions={[5, 25, 50, 100]}
                autoHeight
                disableSelectionOnClick

            />

        </Box>


    )

}