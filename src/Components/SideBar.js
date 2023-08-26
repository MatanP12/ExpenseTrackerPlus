import { Drawer, Toolbar, Box, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { useMemo, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
function SideBarItem({ name, icon, path, isSelected, handleSelectItem }) {
    return (
        <ListItemButton component={RouterLink} to={path} selected={isSelected} onClick={handleSelectItem}>
            <ListItemIcon >
                {icon}
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>
    )
}

function SideBar() {
    const [selectedItem, setSelectedItem] = useState("Home");
    const drawerWidth = 200;

    const listItems = useMemo(() => [
        { name: "Home", icon: <DashboardIcon />, path: "/" },
        { name: "Transactions", icon: <ShoppingCartIcon />, path: "/transactions" }

    ], [])

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box >
                <List>
                    {listItems.map((curr) => {
                        return (
                            <SideBarItem key={curr.name} name={curr.name} icon={curr.icon} path={curr.path} isSelected={selectedItem === curr.name} handleSelectItem={() => setSelectedItem(curr.name)} />
                        )
                    })}
                </List>
            </Box>
        </Drawer>
    );

}

export default SideBar