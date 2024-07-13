import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import {Patient} from "../PatientsPanel/Patients.model";

const PatientPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);

    useEffect(() => {
        const fetchPatient = async () => {
            const response = await fetch(`http://localhost:8080/api/patients/${id}`);
            const data = await response.json();
            setPatient(data);
        };

        fetchPatient();
    }, [id]);

    if (!patient) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box p={2}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h4">{patient.patientName}</Typography>
                <Typography variant="body1"><strong>Age:</strong> {patient.age}</Typography>
                <Typography variant="body1"><strong>Notes:</strong> {patient.notes}</Typography>
                <Typography variant="body1"><strong>Social Media Link:</strong> {patient.socialMediaLink}</Typography>
            </Paper>
        </Box>
    );
};

export default PatientPage;
