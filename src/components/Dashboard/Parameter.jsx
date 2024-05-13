import { Box } from '@mui/material'
import React from 'react'
import Spo2 from './Spo2'
import Temp from './Temp'
import Ecg from './Ecg'
import { useParams } from 'react-router-dom'

const Parameter = () => {
  const {patientId} = useParams();
  console.log(patientId);
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} mt={3}>
        <Spo2 patientId = {patientId}/>
        <Temp patientId={patientId}/>
        <Ecg patientId={patientId}/>
      </Box>
    </div>
  )
}

export default Parameter
