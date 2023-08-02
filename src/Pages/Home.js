import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";


function Home() {
  return (
    <Box >
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Home;