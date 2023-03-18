import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import LyricsIcon from '@mui/icons-material/Lyrics';





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
                    <Link  to={`lyrics/track/${track.track_id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="contained">View Lyrics
                    
                    <LyricsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:1}} />
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
    );
  }
  
  export default Track;
  
  // box*container.typo,typo,input,stack-button,button >container,stack-typo,card