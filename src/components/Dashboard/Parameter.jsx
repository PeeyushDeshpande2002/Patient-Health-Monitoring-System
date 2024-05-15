import { Box, Button } from '@mui/material'
import React from 'react'
import Spo2 from './Spo2'
import Temp from './Temp'
import Ecg from './Ecg'
import { useNavigate, useParams } from 'react-router-dom'
import Report from './Report'



const Parameter = () => {
  const {patientId} = useParams();
  console.log(patientId);
  const navigate = useNavigate();
  return (
   
    <div>
      <Box marginLeft={160} marginTop={2}>
      <Button  onClick={()=>{
      navigate(`/dashboard/${patientId}/report`)
    }} variant="contained">Report</Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} mt={3}>
        <Spo2 patientId = {patientId}/>
        <Temp patientId={patientId}/>
        <Ecg patientId={patientId}/>
        
      </Box>
    </div>
  )
}

export default Parameter
