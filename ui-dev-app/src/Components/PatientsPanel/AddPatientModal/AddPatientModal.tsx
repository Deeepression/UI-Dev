import React, {useState} from "react";
import {
    Box, Button, Modal, TextField, Typography
} from '@mui/material';
import {AddPatientModalProps} from "../Patients.model";

export const AddPatientModal: React.FC<AddPatientModalProps> = ({open, handleClose, addPatient}) => {
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState(0);
    const [notes, setNotes] = useState('');

    const addPatientClick = () => {
        addPatient({
            patientName: patientName,
            age: age,
            notes: notes
        });
        resetState();
    }

    const handleCloseClick = () => {
        handleClose();
        resetState();
    }

    const resetState = () => {
        setPatientName('');
        setAge(0);
        setNotes('');
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" component="h2">
                    Add New Patient
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Age"
                    type="number"
                    margin="normal"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                />
                <TextField
                    fullWidth
                    label="Notes"
                    margin="normal"
                    multiline
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <Box mt={2}>
                    <Button variant="contained" color="primary" onClick={addPatientClick}>
                        Create
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleCloseClick} sx={{ml: 2}}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}