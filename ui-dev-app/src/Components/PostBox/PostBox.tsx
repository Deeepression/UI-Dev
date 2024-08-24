import React, { useState } from "react";
import { Paper, Typography, Button, CircularProgress, Box } from "@mui/material";
import { Post } from "../PatientsPanel/Patients.model";
import { StyledPostMetadata } from "./PostBox.styles";
import { useParams } from "react-router-dom";
import { EllipsisWithTooltip } from './PostElement'

const PostBox: React.FC<Post> = ({ id, source, text, prediction, date }) => {
    const { id: patientId } = useParams<{ id: string }>();
    const [currentPrediction, setCurrentPrediction] = useState(prediction ?? 0);
    const [loading, setLoading] = useState(false);
    const formattedPrediction = (currentPrediction * 100).toFixed(2) + '%';

    const handlePredictClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/predictions/post/${patientId}/${id}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to predict post');
            }
            const updatedPost = await response.json();
            setCurrentPrediction(updatedPost.prediction);
        } catch (error) {
            console.error("Error predicting post:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper elevation={2} sx={{
            p: 2,
            mb: 2,
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative', // Position relative for the overlay
        }}>
            {loading && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1, // Ensure it appears above other content
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            <Typography variant="h6"><EllipsisWithTooltip text={text} /></Typography>
            <StyledPostMetadata>
                <Typography variant="body2"><strong>Date: </strong>{date}</Typography>
                <Typography variant="body2"><strong>Source: </strong>{source}</Typography>
                <Typography variant="body2"><strong>Prediction: </strong>{formattedPrediction}</Typography>
            </StyledPostMetadata>
            <Button
                variant="contained"
                color="primary"
                onClick={handlePredictClick}
                disabled={loading}
            >
                {'Predict'}
            </Button>
        </Paper>
    );
};

export default PostBox;
