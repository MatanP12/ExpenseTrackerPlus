import { Outlet } from "react-router";
import { Footer } from "../Components/Footer";
import TopBar from "../Components/TopBar";
import { Toolbar } from "@mui/material";

export function RootPage() {
    return (
        <>
            <TopBar />
            <Toolbar />
            <Outlet />
            <Footer />
        </>
    )
}