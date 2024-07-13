import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {AppBar, Toolbar, Typography, Button } from '@mui/material';


const Navbar: React.FC = () => {

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" component={RouterLink} to="/" >
                    My App
                </Typography>
                <Button component={RouterLink} to="/about" color="inherit">About</Button>
                <Button component={RouterLink} to="/contact" color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
