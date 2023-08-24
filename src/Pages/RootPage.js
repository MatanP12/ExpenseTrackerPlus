import { Outlet } from "react-router";
import { Footer } from "../Components/Footer";
import TopBar from "../Components/TopBar";
import { Box, Toolbar } from "@mui/material";

export function RootPage() {
    return (
        <Box >
            <TopBar />
            <Toolbar />
            <Outlet />
            <Footer />
        </Box>
    )
}