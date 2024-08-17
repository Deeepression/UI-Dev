import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";
import { Post } from "../PatientsPanel/Patients.model";
import { StyledPostMetadata } from "./PostBox.styles";

const PostBox: React.FC<Post> = ({ id, source, text, prediction, date }) => {
    const [currentPrediction, setCurrentPrediction] = useState(prediction);

    const handlePredictClick = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/predictions/post/${id}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Failed to predict post');
            }
            const updatedPost = await response.json();
            setCurrentPrediction(updatedPost.prediction);
        } catch (error) {
            console.error("Error predicting post:", error);
        }
    };

    return (
        <Paper elevation={2} sx={{ p: 2, mb: 2, height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Typography variant="h6">{text}</Typography>
            <StyledPostMetadata>
                <Typography variant="body2"><strong>Date: </strong>{date}</Typography>
                <Typography variant="body2"><strong>Source: </strong>{source}</Typography>
                <Typography variant="body2"><strong>Prediction: </strong>{currentPrediction}</Typography>
            </StyledPostMetadata>
            <Button variant="contained" color="primary" onClick={handlePredictClick}>
                Predict
            </Button>
        </Paper>
    );
};

export default PostBox;
