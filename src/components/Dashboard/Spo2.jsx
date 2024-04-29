import React from "react";
import { Gauge, GaugeContainer } from "@mui/x-charts/Gauge";

const Spo2 = () => {
  return (
    <div>
        <GaugeContainer
        height={200}
        >
      <Gauge
        value={75}
        startAngle={0}
        endAngle={360}
        innerRadius="80%"
        outerRadius="100%"
      />
      </GaugeContainer>
    </div>
  );
};

export default Spo2;
