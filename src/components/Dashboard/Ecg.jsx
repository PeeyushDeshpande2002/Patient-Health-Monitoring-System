import React, { useContext, useEffect, useState } from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { Box, Grid } from "@mui/material";
import { LineChart } from '@mui/x-charts'
import { FirebaseContext } from "../../firebase";


const Ecg = ({patientId}) => {
  const [loading, setLoading] = useState(false);
  const[Ecg, setEcg] = React.useState([]);
  const {dataUsers, graphData} = React.useContext(FirebaseContext);
  useEffect(() => {
    setEcg((prevData) => {
      const updatedData = [...prevData, graphData[patientId].ECG];
      return updatedData.slice(-10);
    });
}, [graphData[patientId].ECG]);

  return (
    <>
    
      <Box display={"flex"} justifyContent={"space-around"} mt={3}>
      <h1>Heart Rate and ECG Reading</h1>
      {!dataUsers ? (
        <h1>Loading...</h1>
      ) : (
        <>
            <Box height={200} width={200} marginTop={5}>
              
              <Gauge
                value={dataUsers[patientId].HEARTRATE}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
              />
            </Box>
            <Box>
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
        </Box>
        </>
      )}
    </Box>
    </>
  );
}

export default Ecg
