import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MultiActionAreaCard from "../Dashboard/Card"
import * as React from 'react';
import { FirebaseContext } from '../../firebase';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);
  const [patients, setPatients] = React.useState([]);
  const { dataUsers } = React.useContext(FirebaseContext);
  console.log(dataUsers)
  React.useEffect(() => {
    if (dataUsers) {
      const patientsArray = Object.keys(dataUsers).map(key => ({
        id: key,
        ...dataUsers[key]
      }));
      setPatients(patientsArray);
    }
  }, [])

  return (
    <div>

      {/* <Box sx={{ padding: '20px', margin: '20p' }} > */}
      {patients ? (

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx = {{padding: '20px', margin : '20px'}}
        >


          {patients && patients.map(patient => (
            // <Item sx={{ padding: '20px', margin: '20p' }}>
              <div key={patient.id}>
                <MultiActionAreaCard patient={patient} />
              </div>
            // </Item>
          ))}

        </Stack>

      ) : (
        <p>Loading.....</p>
      )}
      {/* </Box> */}
    </div>
  )
}


