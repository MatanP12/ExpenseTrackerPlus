import { Typography, Link, Box } from "@mui/material";

export function Footer() {
    return (
        <Box sx={{ bottom: 0, width: "100%", height: 40 }}>
            <Typography variant="body2" color="text.secondary" align="center" >
                {'Copyright © Matan Peretz '}
                <Link color="inherit" href="https://github.com/MatanP12/ExpenseTrackerPlus">
                    GitHub Repository
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}