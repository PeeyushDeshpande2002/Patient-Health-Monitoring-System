import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
export default function MultiActionAreaCard({ patient }) {
  return (

    <Link to={`/dashboard/${patient.id}`}>
    <Card sx={{ Width: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {patient.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {patient.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

  );
}
