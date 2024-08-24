import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Button} from '@mui/material';
import {StyledToolBar} from "./NavBar.styles";


const Navbar: React.FC = () => {

    return (
        <AppBar position="static" color="default">
            <StyledToolBar>
                <Button component={RouterLink} to="/" color="inherit">Home</Button>
                <Button component={RouterLink} to="/patient" color="inherit">My Patients</Button>
                <Button component={RouterLink} to="/tracking" color="inherit">Tracking List</Button>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
