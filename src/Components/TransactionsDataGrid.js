import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useMemo } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Chip } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import { INCOME } from '../utilities/Transaction';
export default function TransactionsDataGrid({ transactions, handleDeleteTransaction, handleEditTransaction }) {

    const columns = useMemo(() => [
        {
            field: 'date', headerName: 'Date', type: 'date', minWidth: 150,
            valueFormatter: (param) => { return param.value.toLocaleDateString('en-GB') }
        },
        {
            field: 'type', headerName: 'Type', minWidth: 150, renderCell: (params) => {
                const isIncome = params.value === INCOME;
                return <Chip icon={isIncome ? <NorthEastIcon /> : <SouthWestIcon />} variant='outlined' label={params.value} style={{ backgroundColor: isIncome ? "#84d888" : "#9f9cdf" }} />
            }
        },
        { field: 'category', headerName: 'Category', flex: 0.2 },
        { field: 'description', headerName: 'Description', flex: 0.2 },
        { field: 'business', headerName: 'Business', flex: 0.2 },
        { field: 'amount', headerName: 'Amount', flex: 0.2, valueFormatter: (param) => { return param.value + ' $' } },
        {
            field: "actions", type: 'actions', width: 100, getActions: (params) => [
                <GridActionsCellItem label="Delete" icon={<DeleteIcon />} onClick={() => handleDeleteTransaction(params.row)} />,
                <GridActionsCellItem label='Edit' icon={<EditIcon />} onClick={() => handleEditTransaction(params.row)} />
            ]
        },

    ], []);


    return (
        <Box width={"100%"} >
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSizeOptions={[5, 25, 50, 100]}
                autoHeight
                disableSelectionOnClick
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'date', sort: 'desc' }]
                    }
                }}
            />
        </Box>
    )

}