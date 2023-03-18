import React, { useState,useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FastRewindIcon from '@mui/icons-material/FastRewind';






const theme = createTheme(
    {
      palette: {
        primary: {
          light: '#212121',
          main: '#212121',
          dark: '#212121',
          contrastText: '#fff',
        },
        secondary: {
          light: '#212121',
          main: '#212121',
          dark: '#212121',
          contrastText: '#000',
        },
      }
    }
  );

const Lyrics =()=> {
    
    let { id } = useParams();
    const options = {
        method: 'GET',
        url: 'https://cors-proxy4.p.rapidapi.com/',
        params: {
          url: `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
        },
        headers: {
          'X-RapidAPI-Key': '1386846032mshffd07fea16699c2p103a45jsn15c59ab9be78',
          'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
        }
      };

    const [track,setTrack]= useState();
    // const [text,setText]= useState('test');
    const [lyrics,setlyrics]= useState('this is the lyrics');
    
    useEffect(()=>{
        axios.request(options)
        .then(res=>{
            // console.log(res.data.message.body.lyrics.lyrics_body);
            setlyrics(res.data.message.body.lyrics.lyrics_body)
        return axios.request({...options,params:{url: `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`}})
        })
        .then(track=>{
            // console.log(track)
            setTrack(track.data.message.body.track.track_name)
        })
        .catch(err => console.log(err));
    })
    
        return(
            <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
            //   justifyContent="center"
            >
            <Link  to={`/`} style={{ textDecoration: 'none' }}>
                    <Button size="small" variant="contained">
                    <FastRewindIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
                    Go back
                    </Button>
                    </Link>
                    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        ></Box>
            </Stack>
            <Grid container spacing={4}>
            <Grid item key={id} xs={12} sm={12} md={12}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                 <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {track}
                    </Typography>
                    <Typography>
                   {lyrics}
                    </Typography>
                  </CardContent>
                </Card>
            </Grid>
            </Grid>
       
        </Container>
            </Box>
        </main>
            </ThemeProvider>
        )
}

export default Lyrics;
// axios.request(this.options)
// .then(res=>{
//     console.log(res)
    // this.setState({lyrics:res.data.message.body.lyrics_body})
// })