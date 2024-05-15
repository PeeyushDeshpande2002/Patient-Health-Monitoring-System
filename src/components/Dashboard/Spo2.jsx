import React, { useContext, useEffect, useState } from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { LineChart } from '@mui/x-charts'
import { FirebaseContext } from "../../firebase";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',

}));



const Spo2 = ({ patientId }) => {
  const [loading, setLoading] = useState(false);
  const [SPO2, setSPO2] = React.useState([]);
  const { dataUsers, graphData } = React.useContext(FirebaseContext);
  console.log(graphData[patientId].SPO2);
  useEffect(() => {
    setSPO2((prevData) => {
      // Take the past 10 values and append the new value
      const updatedData = [...prevData, graphData[patientId].SPO2];
      return updatedData.slice(-10);
    });
  }, [graphData[patientId].SPO2]);

  return (
    <>
     

      <Box sx={{ flexGrow: 1 , margin : '20px'}} >
        <Item sx = {{ padding : '20px'}}>
        <h1 >SPO2 Reading</h1>
        {!dataUsers ? (
          <h1>Loading...</h1>
        ) : (
          <>

            <Grid container spacing={2}>
              <Grid item xs={5}>
               
                  <Gauge
                    value={dataUsers[patientId].SPO2}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="80%"
                    outerRadius="100%"
                  />
               
              </Grid>
              <Grid item xs={7}>
                <Item>
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                    series={[
                      {
                        data: SPO2,
                      },
                    ]}
                    width={500}
                    height={300}
                  />
                </Item>
              </Grid>
            </Grid>
          </>
        )}
        </Item>
      </Box >
    </>
  );
};

export default Spo2;
