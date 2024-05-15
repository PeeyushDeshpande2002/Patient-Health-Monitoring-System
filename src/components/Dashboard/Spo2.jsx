import React, { useContext, useEffect, useState } from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { Box, Grid } from "@mui/material";
import { LineChart } from '@mui/x-charts'
import { FirebaseContext } from "../../firebase";

const Spo2 = ({ patientId }) => {
  const [loading, setLoading] = useState(false);
  const[SPO2, setSPO2] = React.useState([]);
  const {dataUsers, graphData} = React.useContext(FirebaseContext);
  //console.log(graphData[patientId].SPO2);
  useEffect(() => {
    setSPO2((prevData) => {
        // Take the past 10 values and append the new value
        const updatedData = [...prevData, graphData[patientId].SPO2];
        return updatedData.slice(-10);
    });
}, [graphData[patientId].SPO2]);

  return (
    <>
    
      <Box display={"flex"} justifyContent={"space-around"} mt={3}>
      <h1>SPO2 Reading</h1>
      {!dataUsers ? (
        <h1>Loading...</h1>
      ) : (
        <>
            <Box height={200} width={200} marginTop={5}>
              
              <Gauge
                value={dataUsers[patientId].SPO2}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
              />
            </Box>
            <Box>
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
        </Box>
        </>
      )}
    </Box>
    </>
  );
};

export default Spo2;
