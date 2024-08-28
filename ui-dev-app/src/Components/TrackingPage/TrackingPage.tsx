import React, { useEffect, useState } from 'react'
import { Patient } from '../PatientsPanel/Patients.model'
import { Box, Grid, Typography } from '@mui/material'
import { UserBox } from '../UserBox/UserBox'

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
          <Grid container spacing={1}>
              {patients.map((patient) => (
                <Grid item xs={12} sm={12} md={12} key={patient.id} style={{ marginBottom: '10px'}}>
                    <UserBox patient={patient} posts={patient.posts}/>
                </Grid>
              ))}
          </Grid>
      </Box>
    );
};

export default TrackingPage;
