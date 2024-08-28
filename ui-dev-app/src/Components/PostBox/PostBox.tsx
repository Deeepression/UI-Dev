import React, { useState } from 'react'
import { Paper, Typography, Button, CircularProgress, Box } from '@mui/material'
import { Post } from '../PatientsPanel/Patients.model'
import { StyledPostContainer, StyledPostMetadata } from './PostBox.styles'
import { useParams } from 'react-router-dom'
import { EllipsisWithTooltip } from './PostElement'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const PostBox: React.FC<Post> = ({ id, source, text, prediction, date }) => {
  const { id: patientId } = useParams<{ id: string }>()
  const [currentPrediction, setCurrentPrediction] = useState(prediction ?? 0)
  const [loading, setLoading] = useState(false)

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
          <CircularProgress/>
        </Box>
      )}
      <Typography variant="h6"><EllipsisWithTooltip text={text}/></Typography>
      <StyledPostContainer>
        <StyledPostMetadata>
          <Typography variant="body2"><strong>Date: </strong>{date}</Typography>
          <Typography variant="body2"><strong>Source: </strong>{source}</Typography>
          <Typography display="flex" variant="body2"><strong>Prediction: </strong> </Typography>
        </StyledPostMetadata>
        <StyledPostMetadata style={{ width: '80px', height: '80px' }}>
          <CircularProgressbar value={currentPrediction * 100} text={`${(currentPrediction * 100).toFixed(2)}%`}
                               styles={buildStyles({
                                 rotation: 0.25,
                                 strokeLinecap: 'butt',
                                 textSize: '16px',
                                 pathTransitionDuration: 0.5,

                                 // Colors
                                 pathColor: `rgb(208, 106, 106)`,
                                 textColor: '#000',
                                 trailColor: '#87b976',
                                 backgroundColor: '#3e98c7',
                               })}/>
        </StyledPostMetadata>
      </StyledPostContainer>
    </Paper>
  )
}

export default PostBox
