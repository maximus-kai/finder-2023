import React, { Component } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import { Consumer } from '../../Context';
// import Track from './Track';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Spinner from '../layout/Spinner'


class Tracks extends Component {
    render(){
        // const {track} = props;
        return (
            <Consumer>
                { value =>{

                    const {track_list,heading} = value;
                    if(track_list === undefined || track_list.length === 0){

                        return <Spinner/>
                    }
                        return(

                            <div>
                           {heading}
                            </div>
                            
                        )
                       
                }

                }
         
            </Consumer>
        )

    }
}

export default Tracks;



//   {track_list.map(item=> 
//     {
//        return <Track key={item.track.track_id} track={item.track}/>
//     }
//     )}