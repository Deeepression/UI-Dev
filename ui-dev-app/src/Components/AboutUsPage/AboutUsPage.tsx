import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { HomeCard } from '../MainPage/HomeCard'

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #bdbdbd1c 0%, #9684843d 100%)',
        color: '#000000ab',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', justifyContent: 'center', flexDirection: 'column' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, width: '800px', padding: '50px' }}>
        We are presenting a tool that has emerged from a critical need within our society.
        Our app is designed to assist social workers and healthcare professionals in monitoring and assessing the mental well-being of individuals through their social media activity.
        This tool leverages advanced deep learning models trained on data derived from real-world cases to identify individuals at risk of self-harm or suicide.
      </Typography>
      <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'row', gap: '70px', paddingLeft: '50px'}}>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '400px', height: '350px', borderRadius: '20px' }} label="Background and Motivation"
                    value={'The inspiration for this app came from a deeply troubling context. On October 7th, 2023, Israel experienced a devastating event with the Nova party massacre, followed by numerous instances of severe mental health crises among affected individuals, including soldiers and civilians. This tragedy highlighted the urgent need for innovative solutions to address mental health issues and prevent suicide.'}/>
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '400px', height: '350px', borderRadius: '20px' }} label="Prevalence of Social Media Use"
                    value={'Statistics: Over 80% of Israelis are active on social media platforms, with many sharing their thoughts and experiences openly online. Globally, about 4.7 billion people use social media, making it a vital source of personal and emotional data.\n        Research: Studies have shown that changes in social media behavior can be indicative of mental health issues. For example, research by the American Journal of Public Health found that individuals who exhibit signs of depression on social media are at a higher risk of severe outcomes, including suicide.\n'}/>
        </Grid>
        <Grid lg={3} sm={6} xs={12}>
          <HomeCard sx={{ width: '400px', height: '350px', borderRadius: '20px' }} label="Monitoring and Alerts"
                    value={'Functionality: The app continuously monitors social media posts for signs of distress or suicidal ideation. When risk indicators are detected, the app generates alerts for social workers or healthcare providers to take timely intervention measures.\nStatistics: According to the World Health Organization, 90% of people who die by suicide have a diagnosable mental health condition. Early detection through tools like ours can facilitate timely intervention and support.'}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutUsPage
