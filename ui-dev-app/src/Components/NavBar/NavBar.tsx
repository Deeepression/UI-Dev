import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import { AppBar, Button, Toolbar, Box } from '@mui/material';
import {StyledToolBar} from "./NavBar.styles";


const Navbar: React.FC = () => {

    return (
        <AppBar position="static" color="default">
            <StyledToolBar>
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <img src={'finalprojectlogo.png'} alt="Logo" style={{ height: '45px', marginRight: '16px',borderRadius: '50%' }} />
                </Box>
                <Button component={RouterLink} to="/" color="inherit">Home</Button>
                <Button component={RouterLink} to="/patient" color="inherit">My Patients</Button>
                <Button component={RouterLink} to="/tracking" color="inherit">Tracking List</Button>
                <Button component={RouterLink} to="/dashboard" color="inherit">Dashboard</Button>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
