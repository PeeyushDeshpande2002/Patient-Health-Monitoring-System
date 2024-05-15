import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";
import TableReport from "./TableReport";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const Report = () => {
  const { dataUsers, graphData } = useContext(FirebaseContext);
  console.log(graphData);
  const { patientId } = useParams();
  const pdfRef = useRef();

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
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
      <div ref={pdfRef}>
        <Box>
        <Box display={'flex'} marginLeft={76} mt={3} fontSize={'3xl'} color={'red'} >
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
          <TableReport patientId={patientId} />
        </Box>
        </Box>
      </div>
      <div>
        <Button onClick={downloadPdf}>Download Report</Button>
      </div>
    </div>
  );
};

export default Report;
