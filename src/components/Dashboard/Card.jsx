import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function MultiActionAreaCard({ patient }) {
  return (
    <Link to="/patient">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt="profile photo"
        />
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
