import React, { useContext, useEffect, useState } from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { Box, Grid } from "@mui/material";
import { LineChart } from '@mui/x-charts'
import { FirebaseContext } from "../../firebase";

const Temp = ({patientId}) => {
  const [loading, setLoading] = useState(false);
  const[Temp, setTemp] = React.useState([]);
  const {dataUsers, graphData} = React.useContext(FirebaseContext);
  useEffect(() => {
    setTemp((prevData) => {
        // Take the past 10 values and append the new value
        const updatedData = [...prevData, graphData[patientId].TEMP];
        return updatedData.slice(-10);
    });
}, [graphData[patientId].TEMP]);

  return (
    <>
    
      <Box display={"flex"} justifyContent={"space-around"} mt={3}>
      <h1>Temperature Reading</h1>
      {!dataUsers ? (
        <h1>Loading...</h1>
      ) : (
        <>
            <Box height={200} width={200} marginTop={5}>
              
              <Gauge
                value={dataUsers[patientId].TEMP}
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
              data: Temp,
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

export default Temp;
