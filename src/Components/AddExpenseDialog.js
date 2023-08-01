import { Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField, InputAdornment, DialogActions, Button } from "@mui/material";
import { useState } from "react";
import { Expense } from "../utilities/Expense";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";


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

function CreationDatePicker() {

    const [date, setDate] = useState(dayjs());

    console.log(date.toDate().toLocaleDateString("en-GB"));

    return (
        <DatePicker
            value={date}
            onChange={(newValue) => setDate(newValue)}
        />
    )

}



export function AddExpenseDialog({ open, handleSaveExpense, handleCloseDialog }) {

    const [expense, setExpense] = useState(new Expense("", 0.01, ""))

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "amount" && value < 0.01) {
            return
        }
        setExpense({ ...expense, [name]: value });
    };

    function saveExpense() {
        handleSaveExpense(expense);
        handleCloseDialog();
        setExpense(new Expense("", 0.01, ""));
    }

    return (
        <Dialog open={open}>
            <DialogTitle>
                Create new Expense
            </DialogTitle>
            <DialogContent sx={{ width: 500 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        <TextField placeholder="Description" name="description" fullWidth value={expense.description} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder="Amount" name="amount" type="number" value={expense.amount} onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">$</InputAdornment>,
                                inputProps: { min: 0.01 },

                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CreationDatePicker />
                    </Grid>
                    <Grid item xs={6}>
                        <CategorySelect categories={["Food", "Clothes", "Entartaiment"]} expense={expense} handleSetCategory={handleChange} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={saveExpense}>
                    Create
                </Button>
                <Button onClick={handleCloseDialog}>
                    Cancel
                </Button>

            </DialogActions>
        </Dialog>

    )

}