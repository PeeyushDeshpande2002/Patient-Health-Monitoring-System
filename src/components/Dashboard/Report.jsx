import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";
import TableReport from "./TableReport";
import { useLocation, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import GraphReport from "./GraphReport";

const Report = () => {
  const { dataUsers, graphData } = useContext(FirebaseContext);
  console.log(graphData);
  const { patientId } = useParams();
  const pdfRef = useRef();
  const location = useLocation();
  console.log(location.state);
  const {SPO2, HEARTRATE, TEMP, ECG} = location.state.parameter

  const darkBorderStyle = {
    border: '2px solid #333', // Adjust the color and thickness as needed
    borderRadius: '4px', // Optional: Add border radius for rounded corners
    padding: '16px',
    margin: '100px', // Optional: Add padding inside the box
  };

  const divStyle = {
    height : '850px'
  }

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a5", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save('report.pdf');
    });
  };
  return (
    <div>
      <div ref={pdfRef} style={divStyle}>
        <Box style = {darkBorderStyle}>
        <Box display={'flex'} marginLeft={59} mt={2} fontSize={'3xl'} color={'red'} >
        <MonitorHeartIcon fontSize={'large'}/>
            <Typography fontSize={30} fontWeight={35}>Health Tracker</Typography>
            
        </Box>
        <Box display={'flex'} justifyContent={'space-around'} mt={3} mb={5} color={'blue'}>
        <h2> Medical Report</h2>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mb={5}>
            <h3>Name : {graphData[patientId].name} </h3>
            <h3>Age : {graphData[patientId].age}</h3>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <TableReport data = {{SPO2, HEARTRATE, TEMP}} />
          <GraphReport Ecg={ECG}/>
        </Box>
        </Box>
      </div>
      <div>
        <Button variant="contained" marginLeft ={76} onClick={downloadPdf}>Download Report</Button>
      </div>
    </div>
  );
};

export default Report;
