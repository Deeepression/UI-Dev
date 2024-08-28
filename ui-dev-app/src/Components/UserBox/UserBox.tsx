import { StyledStatusBox, StyledUserDataBox, StyledUserPaper } from '../PatientPage/PatientPage.styles'
import { Typography } from '@mui/material'
import { ProgressChart } from '../ProgressChart/ProgressChart'
import React from 'react'
import { Patient, Post } from '../PatientsPanel/Patients.model'

type UserBoxProps = {
  patient: Patient,
  posts: Post[],
}

export const UserBox: React.FC<UserBoxProps> = ({ patient, posts }) => {
  return (
    <StyledUserPaper elevation={3} sx={{ p: 2, mb: 2 }}>
      <StyledUserDataBox>
        <Typography variant="h4">{patient.patientName}</Typography>
        <Typography variant="body1"><strong>Age: </strong>{patient.age}</Typography>
        <Typography variant="body1"><strong>Notes: </strong>{patient.notes}</Typography>
        <Typography variant="body1"><strong>Social Media Link: </strong>{patient.socialMediaLink}
        </Typography>
      </StyledUserDataBox>
      <StyledStatusBox>
        <ProgressChart posts={posts}/>
      </StyledStatusBox>
    </StyledUserPaper>
  )
}