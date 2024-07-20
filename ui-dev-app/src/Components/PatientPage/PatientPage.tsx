import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography, Paper, Button, Grid} from '@mui/material';
import {Patient, Post} from "../PatientsPanel/Patients.model";
import PatientsPanel from "../PatientsPanel/PatientsPanel";
import AddPostModal from "../AddPostModal/AddPostModal";
import PostBox from "../PostBox/PostBox";

const PatientPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchPatient = async () => {
            const response = await fetch(`http://localhost:8080/api/patients/${id}`);
            const data = await response.json();
            setPatient(data);
        };

        fetchPatient();
    }, [id]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleAddPost = async (newPost: Post) => {
        const response = await fetch(`http://localhost:8080/api/patients/${id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        if (response.ok) {
            const updatedPatient = await response.json();
            setPatient(updatedPatient);
        }
    };

    if (!patient) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <>
            <Box p={2}>
                <Paper elevation={3} sx={{p: 2, mb: 2}}>
                    <Typography variant="h4">{patient.patientName}</Typography>
                    <Typography variant="body1"><strong>Age:</strong> {patient.age}</Typography>
                    <Typography variant="body1"><strong>Notes:</strong> {patient.notes}</Typography>
                    <Typography variant="body1"><strong>Social Media Link:</strong> {patient.socialMediaLink}</Typography>
                </Paper>
                <Typography style={{margin: '20px'}} variant="h5">Posts</Typography>
                <Grid container spacing={2}>
                    {patient.posts.map((post: Post) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                            <PostBox {...post} />
                        </Grid>
                    ))}
                </Grid>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add Post
                </Button>
                <AddPostModal
                    open={open}
                    handleClose={handleClose}
                    handleAddPost={handleAddPost}
                />
            </Box>
            <PatientsPanel />
        </>
    );
};

export default PatientPage;
