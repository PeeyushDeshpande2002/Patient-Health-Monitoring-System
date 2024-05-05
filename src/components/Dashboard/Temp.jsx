import { Box } from "@mui/material";
import { Gauge, LineChart } from "@mui/x-charts";
import React from "react";

const Temp = () => {
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

export default Temp;
