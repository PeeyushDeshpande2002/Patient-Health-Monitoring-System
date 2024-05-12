import { Box, Card } from "@mui/material"
import MultiActionAreaCard from "../Dashboard/Card"
import * as React from 'react';
import { FirebaseContext } from '../../firebase';

export const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const[patients, setPatients] = React.useState([]);
  const {dataUsers} = React.useContext(FirebaseContext);

 console.log(dataUsers);
//   React.useEffect(()=>{
//     if (dataUsers) {
//       const patientsArray = Object.keys(dataUsers).map(key => ({
//           id: key,
//           ...dataUsers[key]
//       }));
//       setPatients(patientsArray);
//       console.log(patientsArray[0]);
//   }
// }, [])
  return (
    <div>
      <Box display={"flex"} justifyContent={"stretch"} mt={3}>
      {dataUsers && dataUsers.map(patient => (
                    <div key={patient.id}>
                       <MultiActionAreaCard patient={patient}/>
                    </div>
                ))}
      
      
      </Box>
    </div>
  )
}


