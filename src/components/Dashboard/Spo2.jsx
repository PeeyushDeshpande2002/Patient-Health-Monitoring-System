import React from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";
import { Box, Grid } from "@mui/material";

const Spo2 = () => {
  return (
    <div>
      
        <Box height={200} width={200} marginTop={5}>
          <Gauge
            value={75}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
          />
        </Box>
    </div>
  );
};

export default Spo2;
