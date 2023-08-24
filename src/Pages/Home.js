import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";


function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Home;