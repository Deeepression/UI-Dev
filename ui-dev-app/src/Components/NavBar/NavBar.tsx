import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {AppBar, Typography, Button} from '@mui/material';
import {StyledToolBar} from "./NavBar.styles";


const Navbar: React.FC = () => {

    return (
        <AppBar position="static" color="default">
            <StyledToolBar>
                <Button component={RouterLink} to="/" color="inherit">Home</Button>
                <Button component={RouterLink} to="/about" color="inherit">About</Button>
                <Button component={RouterLink} to="/contact" color="inherit">Contact</Button>
            </StyledToolBar>
        </AppBar>
    );
};

export default Navbar;
