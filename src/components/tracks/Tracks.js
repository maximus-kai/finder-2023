import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Track from './Track';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';





class Tracks extends Component {
    render(){
        return (
            <Consumer>
                { value =>{
                    const {track_list,heading} = value;
                    if(track_list === undefined || track_list.length === 0){

                        return(
                            <Box sx={{ width: '100%' }}>
                                   <LinearProgress />
                            </Box>
                        )
                            
                    }
                        return(
                            <>
                            <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                            >
                            <Typography
                            component="h5"
                            variant="h5"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            >
                            {heading}
                            </Typography>
                            
                            </Stack>

                            <Grid container spacing={4}>
            {track_list.map((card) => (
             <Track key={card.track.track_id} track={card.track}/>
            ))}
          </Grid>
                            </>
                            
                        )
                       
                }

                }
         
            </Consumer>
        )

    }
}

export default Tracks;

