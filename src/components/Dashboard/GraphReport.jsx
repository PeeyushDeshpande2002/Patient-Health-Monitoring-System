import { Grid, Paper, styled } from '@mui/material'
import { LineChart } from '@mui/x-charts'
import React from 'react'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  
  }));
const GraphReport = ({Ecg}) => {
  return (
    <div >
        
      <Grid marginTop={5} item xs={7}>
        <Item>
        <h2>ECG Reading</h2>
      <LineChart
          xAxis={[{ data: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }]}
          series={[
            {
              data: Ecg,
            },
          ]}
          width={500}
          height={300}
        />
        </Item>
              </Grid>
    </div>
  )
}

export default GraphReport
