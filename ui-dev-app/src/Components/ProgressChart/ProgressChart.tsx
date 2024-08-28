import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import React from 'react'
import { Patient, Post } from '../PatientsPanel/Patients.model'

type ProgressChartProps = {
  patient: Patient,
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ patient }) => {
  const chartData = patient?.posts
    .map((post: Post) => {
      const date = new Date(post.date)
      return {
        date: date.toLocaleDateString(),
        yearMonthDay: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, // "YYYY-MM-DD" format
        Prediction: (post.prediction! * 100).toFixed(2), // Assuming 'predictionPercentage' is a field in 'Post'
      }
    })
    .sort((a, b) => {
      const [aYear, aMonth, aDay] = a.yearMonthDay.split('-').map(Number)
      const [bYear, bMonth, bDay] = b.yearMonthDay.split('-').map(Number)

      if (aYear !== bYear) return aYear - bYear
      if (aMonth !== bMonth) return aMonth - bMonth
      return aDay - bDay
    }) || []

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="date" tick={{ fontSize: '14px' }}/>
        <YAxis domain={[0.0, 100.0]} tick={{ fontSize: '14px' }}/>
        <Tooltip labelStyle={{fontSize: '14px'}} itemStyle={{fontSize: '14px'}}/>
        <Line type="monotone" dataKey="Prediction" stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  )

}