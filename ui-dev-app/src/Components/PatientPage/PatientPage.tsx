import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Patient, Post } from '../PatientsPanel/Patients.model';
import PatientsPanel from '../PatientsPanel/PatientsPanel';
import AddPostModal from '../AddPostModal/AddPostModal';
import PostBox from '../PostBox/PostBox';
import { StyledButtonsWrapper, StyledEmptyListMessage, UserHeaderWrapper } from './PatientPage.styles'
import { UserBox } from '../UserBox/UserBox';
import { PostRange, PostRanges } from './PatientPage.consts'
import { filterPosts } from './PatientPage.utils'

const PatientPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState<PostRange>(PostRanges.ALL);

    useEffect(() => {
        const fetchPatient = async () => {
            const response = await fetch(`http://localhost:8080/api/patients/${id}`);
            if (response.status === 200) {
                const data = await response.json();
                setPatient(data);
            }
        };

        id && fetchPatient();
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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (response.ok) {
            const updatedPatient = await response.json();
            setPatient(updatedPatient);
        }
    };

    const handleFetchPosts = async () => {
        const response = await fetch(`http://localhost:8080/api/patients/${id}/fetchPosts`);

        if (response.ok) {
            const updatedPatient = await response.json();
            setPatient(updatedPatient);
        }
    };

    return (
      <>
          {patient ? (
            <Box p={2}>
                <UserBox patient={patient} posts={filterPosts(patient.posts, filter)}/>
                <UserHeaderWrapper>
                    <Typography style={{ margin: '20px' }} variant="h4">Posts</Typography>
                    <FormControl variant="outlined" style={{ minWidth: 120, marginBottom: '20px' }}>
                        <InputLabel id="date-filter-label">Filter By Date</InputLabel>
                        <Select
                          labelId="date-filter-label"
                          value={filter}
                          onChange={(e) => setFilter(e.target.value as PostRange)}
                          label="Filter By Date"
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Last Day">Last Day</MenuItem>
                            <MenuItem value="Last Week">Last Week</MenuItem>
                            <MenuItem value="Last Month">Last Month</MenuItem>
                        </Select>
                    </FormControl>
                </UserHeaderWrapper>
                <Grid container spacing={2}>
                    {filterPosts(patient.posts, filter).map((post: Post) => (
                      <Grid item xs={4} sm={4} md={4} lg={4} key={post.id}>
                          <PostBox {...post} />
                      </Grid>
                    ))}
                </Grid>
                <StyledButtonsWrapper>
                    <Button variant="contained" color="primary" onClick={handleOpen}>
                        Add Post
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleFetchPosts}>
                        Fetch Posts
                    </Button>
                </StyledButtonsWrapper>
                <AddPostModal
                  open={open}
                  handleClose={handleClose}
                  handleAddPost={handleAddPost}
                />
            </Box>
          ) : (
            <StyledEmptyListMessage>
                Select Some Patient From The list, Or add new Patient to start.
            </StyledEmptyListMessage>
          )}
          <PatientsPanel />
      </>
    );
};

export default PatientPage;
