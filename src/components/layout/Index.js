import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Tracks from '../tracks/Tracks';
import LyricsIcon from '@mui/icons-material/Lyrics';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://Lyricfinder.com.ng">
        Lyricfinder.com.ng
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



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



const Index = () => {

 
  return (
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
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
               Lyric finder 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Find all your favorite song lyrics in one place.
            </Typography>
            <TextField fullWidth label="Search Lyrics" placeholder='Search Lyrics' id="fullWidth" />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Search Now
              <LyricsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:1}} />
              </Button>
              <Button variant="outlined">Clear Search</Button>
            </Stack>
{/* theres a stack here */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {/* there's a grid here as well */}
         <Tracks/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Lyric Finder
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          What you've be searching for, forever!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </ThemeProvider>
  )
}

export default Index;