import React from "react";
import { Paper, Typography } from "@mui/material";
import { Post } from "../PatientsPanel/Patients.model";
import {StyledPostMetadata} from "./PostBox.styles";

const PostBox: React.FC<Post> = ({ id, source, text, prediction, date }) => {

    return (
        <Paper elevation={2} sx={{ p: 2, mb: 2, height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Typography variant="h6">{text}</Typography>
            <StyledPostMetadata>
                <Typography variant="body2"><strong>Date: </strong>{date}</Typography>
                <Typography variant="body2"><strong>Source: </strong>{source}</Typography>
                <Typography variant="body2"><strong>Prediction: </strong>{prediction}</Typography>
            </StyledPostMetadata>
        </Paper>
    );
};

export default PostBox;
