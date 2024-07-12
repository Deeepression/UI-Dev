import React, {useEffect, useState} from 'react';
import {
    Box, Button, Drawer
} from '@mui/material';
import {styled} from '@mui/system';
import {AddPatientModal} from "./AddPatientModal/AddPatientModal";
import {Patient} from "./Patients.model";
import {PatientsList} from "./PatientsList/PatientsList";

const AddPatientButton = styled(Button)(({theme}) => ({
    marginTop: theme.spacing(2),
}));

const PatientsPanel: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await fetch('http://localhost:8080/api/patients');
        const data = await response.json();
        setPatients(data);
    };

    const addPatient = async (patient: Partial<Patient>) => {
        const {patientName, age, notes} = patient;
        const response = await fetch('http://localhost:8080/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({patientName, age, notes}),
        });

        const newPatient = await response.json();
        setPatients([...patients, newPatient]);
        handleClose();
    };

    const deletePatient = async (id: number) => {
        await fetch(`http://localhost:8080/api/patients/${id}`, {
            method: 'DELETE',
        });

        setPatients(patients.filter(patient => patient.id !== id));
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box display="flex">
            <Drawer
                variant="permanent"
                anchor="left"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Box sx={{overflow: 'auto'}}>
                    <PatientsList patients={patients} deletePatient={deletePatient} />
                    <AddPatientButton variant="contained" color="primary" onClick={handleOpen}>
                        Add New Patient
                    </AddPatientButton>
                    <AddPatientModal open={open} handleClose={handleClose} addPatient={addPatient}/>
                </Box>
            </Drawer>
        </Box>
    );
};

export default PatientsPanel;
