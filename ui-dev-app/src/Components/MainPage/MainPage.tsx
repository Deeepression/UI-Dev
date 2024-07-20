import React from 'react';
import {IconButton} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {StyledIconButton, StyledSvgsContainer} from "./MainPage.styles";

const MainPage: React.FC = () => {
    return (
        <div className="App-header">
            <h2>My Panel</h2>
            <StyledSvgsContainer>
                <IconButton
                    component={RouterLink}
                    to="/patient"
                    color="inherit"
                >
                    <StyledIconButton>
                        <img src="/patients.svg" alt="Patients" style={{width: 160, height: 160}}/>
                        <div>My Patients</div>
                    </StyledIconButton>
                </IconButton>
                <IconButton
                    component={RouterLink}
                    to="/tracking"
                    color="inherit"
                >
                    <StyledIconButton>
                        <img src="/tracking.svg" alt="Tracking" style={{width: 160, height: 160}}/>
                        <div>Tracking List</div>
                    </StyledIconButton>
                </IconButton>
                <IconButton
                    component={RouterLink}
                    to="/contact"
                    color="inherit"
                >
                    <StyledIconButton>
                        <img src="/settings.svg" alt="Settings" style={{width: 160, height: 160}}/>
                        <div>Settings</div>
                    </StyledIconButton>
                </IconButton>
            </StyledSvgsContainer>
        </div>
    );
};

export default MainPage;
