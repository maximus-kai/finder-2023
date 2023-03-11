import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';



const Track = (props) =>{
      const {track} = props;
      const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Grid container spacing={4}>    
{cards.map((card) => {
<Grid item key={card} xs={12} sm={6} md={4}>
<Card
sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
>
<CardMedia
component="img"
sx={{
// 16:9
pt: '5%',
}}
image="https://static.vecteezy.com/system/resources/previews/002/249/673/original/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg"
alt="random"
/>
<CardContent sx={{ flexGrow: 1 }}>
<Typography gutterBottom variant="h5" component="h2">
Artist Name: {track.artist_name}
</Typography>
<Typography>
This is a media card. You can use this section to describe the
content.
</Typography>
</CardContent>
<CardActions>
<Button size="small">View</Button>
<Button size="small">Edit</Button>
</CardActions>
</Card>
</Grid>
})}

</Grid> 
  );
}

export default Track;



 // <Grid item ={3} >

    // <Card xs={{ maxWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //     Artist Name: {track.artist_name}
    //     </Typography>
    //     <Typography variant="h5" component="div">
          
    //      Track Name: {track.track_name}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
    //      Album Name: {track.album_name}
    //     </Typography>
    //     <Typography variant="body2">
        
    //      Album IDD: {track.album_id}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Expand</Button>
    //   </CardActions>
    // </Card>
    // </Grid>