import { IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { PatientsListProps } from '../PatientsPanel/Patients.model'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'

export const PatientsList: React.FC<PatientsListProps> = ({patients, deletePatient}) => {
    const navigate = useNavigate();

    const handlePatientClick = (id: string) => {
        navigate(`/patient/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top after navigating

    };

    return (
        <>
            <span style={{margin: '25px', display: "flex", flexDirection: "column"}}>My Patients</span>
            <List>
                {patients.map((patient) => (
                    <ListItemButton key={patient.id} onClick={() => handlePatientClick(patient.id!)}>
                        <ListItemText
                            primary={patient.patientName}
                            secondary={`Age: ${patient.age} - Notes: ${patient.notes}`}
                        />
                        <IconButton edge="end" aria-label="delete" onClick={(e) => {
                            e.stopPropagation();
                            deletePatient(patient.id!);
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemButton>
                ))}
            </List>
        </>
    );
}