import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Spo2 from "./Spo2";
import Temp from "./Temp";
import Ecg from "./Ecg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FirebaseContext } from "../../firebase";

const Parameter = () => {
  const { patientId } = useParams();
  const [ecg, setEcg] = useState([]);
  const { graphData } = useContext(FirebaseContext);
  //const navigate = useNavigate();
  useEffect(() => {
    setEcg((prevData) => {
      if (graphData[patientId].ECG != 0) {
        const updatedData = [...prevData, graphData[patientId].ECG];
        return updatedData.slice(-20);
      }
    });
  }, [graphData[patientId].ECG]);
  const data = {
    SPO2: graphData[patientId].SPO2,
    TEMP: graphData[patientId].TEMP,
    HEARTRATE: graphData[patientId].HEARTRATE,
    ECG: ecg,
  };
  console.log(data);
  return (
    // onClick={() => navigate(`/dashboard/${patientId}/report`)}
    <div>
      
        <Link
          to={`/dashboard/report/${patientId}`} 
          state = {{parameter : data}}
        >
          <Button>Report</Button>
        </Link>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-around"}
        mt={1}
      >
        <Spo2 patientId={patientId} />
        <Temp patientId={patientId} />
        <Ecg patientId={patientId} />
      </Box>
    </div>
  );
};

export default Parameter;
