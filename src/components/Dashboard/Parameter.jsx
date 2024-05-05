import { Box } from '@mui/material'
import React from 'react'
import Spo2 from './Spo2'
import Temp from './Temp'
import Ecg from './Ecg'

const Parameter = () => {
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-around"} mt={3}>
        <Spo2/>
        <Temp/>
        <Ecg/>
      </Box>
    </div>
  )
}

export default Parameter
