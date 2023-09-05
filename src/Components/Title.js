import { Typography } from "@mui/material";

export function Title({ children, color }) {

    return (
        <Typography variant="h4" color={color} align="center">
            {children}
        </Typography>
    )
}