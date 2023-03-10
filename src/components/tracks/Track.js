import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';





const Track = (props) =>{
      const {track} = props;
      
  return (
    <Grid item key={track.track_id} xs={12} sm={6} md={4}>
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
                      {track.track_name}
                    </Typography>
                    <Typography>
                    {track.artist_name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Lyrics</Button>
                  </CardActions>
                </Card>
              </Grid>
    );
  }
  
  export default Track;
  
  
  //     <Grid container spacing={4}>    
  // {cards.map((card) => {
  // <Grid item key={card} xs={12} sm={6} md={4}>
  // <Card
  // sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  // >
  // <CardMedia
  // component="img"
  // sx={{
  // // 16:9
  // pt: '5%',
  // }}
  // image="https://static.vecteezy.com/system/resources/previews/002/249/673/original/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg"
  // alt="random"
  // />
  // <CardContent sx={{ flexGrow: 1 }}>
  // <Typography gutterBottom variant="h5" component="h2">
  // Artist Name: 
  // </Typography>
  // <Typography>
  // This is a media card. You can use this section to describe the
  // content.
  // </Typography>
  // </CardContent>
  // <CardActions>
  // <Button size="small">View</Button>
  // <Button size="small">Edit</Button>
  // </CardActions>
  // </Card>
  // </Grid>
  // })}
  
  // </Grid> 
  
//  <Grid item ={3} >

//     <Card xs={{ maxWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Artist Name: {track.artist_name}
//         </Typography>
//         <Typography variant="h5" component="div">
          
//          Track Name: {track.track_name}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
//          Album Name: {track.album_name}
//         </Typography>
//         <Typography variant="body2">
        
//          Album IDD: {track.album_id}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Expand</Button>
//       </CardActions>
//     </Card>
//     </Grid>