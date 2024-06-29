import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '..//App.css';
export default function ActionAreaCard({title,image,year,type,imdb}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='cardStyle'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {imdb}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
