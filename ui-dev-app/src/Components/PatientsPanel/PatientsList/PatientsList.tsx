import {Button, List, ListItem, ListItemText} from "@mui/material";
import React from "react";
import {PatientsListProps} from "../Patients.model";


export const PatientsList: React.FC<PatientsListProps> = ({patients, deletePatient}) => {

    return (
        <>
            <span style={{margin: '25px', display: "flex", flexDirection: "column"}}>My Patients</span>
            <List>
                {patients.map((patient) => (
                    <ListItem key={patient.id}>
                        <ListItemText
                            primary={patient.patientName}
                            secondary={`Age: ${patient.age} - Notes: ${patient.notes}`}
                        />
                        <Button onClick={() => deletePatient(patient.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </>
    );
}