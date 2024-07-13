import React, {useEffect, useState} from 'react';
import {
    Box, Button, Drawer, IconButton
} from '@mui/material';
import {styled} from '@mui/system';
import {AddPatientModal} from "../AddPatientModal/AddPatientModal";
import {Patient} from "./Patients.model";
import {PatientsList} from "../PatientsList/PatientsList";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const AddPatientButton = styled(Button)(({theme}) => ({
    marginTop: theme.spacing(2),
}));

const PatientsPanel: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(true);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        const response = await fetch('http://localhost:8080/api/patients');
        const data = await response.json();
        setPatients(data);
    };

    const addPatient = async (patient: Partial<Patient>) => {
        const response = await fetch('http://localhost:8080/api/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patient),
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
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <Box display="flex">
            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                sx={{
                    width: drawerOpen ? 340 : 0,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 340,
                        boxSizing: 'border-box',
                        transition: 'width 0.3s',
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
            <IconButton
                onClick={toggleDrawer}
                sx={{
                    position: 'absolute',
                    left: drawerOpen ? 340 : 0,
                    top: 16,
                    transition: 'left 0.3s',
                    backgroundColor: '#FFF'
                }}
            >
                {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </Box>
    );
};

export default PatientsPanel;
