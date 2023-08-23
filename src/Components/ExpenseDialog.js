import { Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField, InputAdornment, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { Expense } from "../utilities/Expense";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import LocationOnIcon from '@mui/icons-material/LocationOn';



function CategorySelect({ categories, expense, handleSetCategory }) {
    return (
        <Select value={expense.category} name="category" onChange={handleSetCategory} displayEmpty fullWidth>
            <MenuItem disabled key="" value="">
                Category
            </MenuItem>
            {categories.map((curr) => {
                return (
                    <MenuItem value={curr} key={curr}>
                        {curr}
                    </MenuItem>
                )
            })}
        </Select>
    );
}

function CreationDatePicker({ handleSetDate, date }) {
    return (
        <DatePicker
            value={dayjs(date)}
            onChange={(newValue) => {
                handleSetDate(newValue.toDate())
            }}
        />
    )

}

export function ExpenseDialog({ expense, open, handleCloseDialog, setExpense, handleSaveExpense }) {

    function handleChange(event) {
        const { name, value } = event.target;
        setExpense({ ...expense, [name]: value });
    };

    function handleSetDate(newDate) {
        setExpense({ ...expense, creationDate: newDate });
    }


    function saveExpense() {
        handleSaveExpense(expense);
        handleCloseDialog();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>
                Create new Expense
            </DialogTitle>
            <DialogContent sx={{ width: 500 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                        <TextField placeholder="Description" name="description" fullWidth value={expense.description} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField placeholder="Amount" name="amount" type="number" value={expense.amount} onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$ </InputAdornment>,
                                inputProps: { min: 0.01 },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder="Bussiness" name="business" value={expense.business} onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <LocationOnIcon />
                                </InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <CreationDatePicker handleSetDate={handleSetDate} date={expense.creationDate} />
                    </Grid>
                    <Grid item xs={6}>
                        <CategorySelect categories={["Food", "Clothes", "Entartaiment"]} expense={expense} handleSetCategory={handleChange} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={saveExpense}>
                    Save
                </Button>
                <Button onClick={handleCloseDialog}>
                    Cancel
                </Button>

            </DialogActions>
        </Dialog>

    )

}

