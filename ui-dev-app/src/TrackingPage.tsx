import React, {useEffect, useState} from 'react';
import {Patient} from "./Components/PatientsPanel/Patients.model";
import {Grid, Paper, Typography, Box} from '@mui/material';
import {
    StyledStatusBox,
    StyledStatusBoxInnerImg,
    StyledUserDataBox,
    StyledUserPaper
} from "./Components/PatientPage/PatientPage.styles";
import {statusSvgMap} from "./Components/PatientPage/PatientPage.consts";

const TrackingPage: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await fetch('http://localhost:8080/api/patients');
        const data = await response.json();
        setPatients(data);
    };

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Patients List
            </Typography>
            <Grid container spacing={2}>
                {patients.map((patient) => (
                    <Grid item xs={12} sm={6} md={4} key={patient.id}>
                        <StyledUserPaper elevation={3} sx={{p: 2, height: '100%'}}>
                            <StyledUserDataBox>
                                <Typography variant="h6">
                                    {patient.patientName}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Age:</strong> {patient.age}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Notes:</strong> {patient.notes}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Social Media Link:</strong> {patient.socialMediaLink}
                                </Typography>
                            </StyledUserDataBox>
                            <StyledStatusBox>
                                <Typography variant="body1"><strong>General Status:</strong> </Typography>
                                <StyledStatusBoxInnerImg src={statusSvgMap[patient.generalStatus]}
                                                         alt={statusSvgMap[patient.generalStatus]}
                                                         style={{
                                                             width: 24,
                                                             height: 24
                                                         }}/>
                            </StyledStatusBox>
                        </StyledUserPaper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TrackingPage;
