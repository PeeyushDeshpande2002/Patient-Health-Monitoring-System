import React, { useContext, useEffect, useState } from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { Box, Grid } from "@mui/material";
import { FirebaseContext } from "../../firebase";

const Spo2 = () => {
  //const [oxy, setOxy] = useState();
  const [loading, setLoading] = useState(false);
  const { data } = useContext(FirebaseContext);
  
  
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {/* <h1>{data && data.SPO2} : oxygen</h1> */}

          <Box height={200} width={200} marginTop={5}>
            <Gauge
              value={data && data.SPO2}
              startAngle={0}
              endAngle={360}
              innerRadius="80%"
              outerRadius="100%"
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default Spo2;
