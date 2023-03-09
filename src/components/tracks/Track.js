import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';



const Track = (props) =>{
      const {track} = props;
  return (
    <Grid item ={3} >

    <Card xs={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Artist Name: {track.artist_name}
        </Typography>
        <Typography variant="h5" component="div">
          
         Track Name: {track.track_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
         Album Name: {track.album_name}
        </Typography>
        <Typography variant="body2">
        
         Album ID: {track.album_id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Expand</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default Track;
