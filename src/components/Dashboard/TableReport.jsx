import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FirebaseContext } from "../../firebase";

export default function TableReport({ patientId }) {
  function createData(Parameter, Range, Value) {
    return { Parameter, Range, Value };
  }

  const { dataUsers } = React.useContext(FirebaseContext);

  // const SPO2 = dataUsers[patientId].SPO2;
  // const HeartRate = dataUsers[patientId].HEARTRATE;
  // const Temp = dataUsers[patientId].TEMP;
  const rows = [
    createData("SPO2", "94-100", dataUsers[patientId].SPO2),
    createData("Heart Rate", "60-100", dataUsers[patientId].HEARTRATE),
    createData("Temperature", "97F-99F", dataUsers[patientId].TEMP),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 500, alignSelf: "center" }}
    >
      <Table sx={{ maxWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Parameters</TableCell>
            <TableCell align="right">Range</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.map((row) => (
              <TableRow
                key={row.Parameter}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Parameter}
                </TableCell>
                <TableCell align="right">{row.Range}</TableCell>
                <TableCell align="right">{row.Value}</TableCell>
              </TableRow>
            ))
          ) : (
            <p>Loading....</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
