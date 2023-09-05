import { Dialog, DialogContent, DialogTitle, Grid, MenuItem, Select, TextField, InputAdornment, DialogActions, Button, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { INCOME, EXPENSE } from "../utilities/Transaction";

function CategorySelect({ categories, transaction, handleSetCategory }) {
    return (
        <Select disabled={transaction.type === INCOME} value={transaction.category} name="category" onChange={handleSetCategory} displayEmpty fullWidth>
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
            <MenuItem disabled key={INCOME} value={INCOME}>Income</MenuItem>
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

export function TransactionDialog({ transaction, open, handleCloseDialog, setTransaction, handleSaveTransaction }) {

    console.log(transaction);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "type") {
            transaction.category = value === INCOME ? INCOME : "Other"
        }
        setTransaction({ ...transaction, [name]: value });
    };

    function handleSetDate(newDate) {
        setTransaction({ ...transaction, date: newDate });
    }


    function saveTransaction() {
        handleSaveTransaction({ ...transaction, amount: Number(transaction.amount) });
        handleCloseDialog();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>
                Create new Transaction
            </DialogTitle>
            <DialogContent sx={{ width: 500 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl sx={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                            <FormLabel sx={{ mr: 3 }}>Type</FormLabel>
                            <RadioGroup row name="type" value={transaction.type} onChange={handleChange}>
                                <FormControlLabel value={EXPENSE} control={<Radio />} label={"Expense"} />
                                <FormControlLabel value={INCOME} control={<Radio />} label={"Income"} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField placeholder="Description" name="description" fullWidth value={transaction.description} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField placeholder="Amount" name="amount" type="number" value={transaction.amount} onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">$ </InputAdornment>,
                                inputProps: { min: 0.01 },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField placeholder="Bussiness" name="business" value={transaction.business} onChange={handleChange}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <LocationOnIcon />
                                </InputAdornment>
                            }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <CreationDatePicker handleSetDate={handleSetDate} date={transaction.date} />
                    </Grid>
                    <Grid item xs={6}>
                        <CategorySelect categories={["Food", "Clothing", "Shopping", "Entertainment", "Other"]} transaction={transaction} handleSetCategory={handleChange} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={saveTransaction}>
                    Save
                </Button>
                <Button onClick={handleCloseDialog}>
                    Cancel
                </Button>

            </DialogActions>
        </Dialog>

    )

}

