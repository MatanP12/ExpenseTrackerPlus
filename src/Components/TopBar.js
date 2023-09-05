import { AppBar, Toolbar, Typography } from "@mui/material";


export default function TopBar() {
    return (
        <AppBar sx={{ zIndex: 1400 }}>
            <Toolbar>
                <Typography component="h1" variant="h6">
                    ExpenseTracker+
                </Typography>
            </Toolbar>
        </AppBar>
    )
}