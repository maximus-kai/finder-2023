import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Spinner from '../layout/Spinner';
import Track from './Track';


class Tracks extends Component {
    render(){
        return (
            <Consumer>
                { value =>{

                    const {track_list,heading} = value;
                    if(track_list === undefined || track_list.length === 0){

                        return <Spinner/>
                    }
                        return(
                            <React.Fragment>
                            <h3  > {heading} </h3>
                            <div>

                               <div
                               className='grid'
                               sx={{
                                display:'grid',
                                gridTemplateColumns: "repeat(auto-fit,minmax(300px, 1fr))",
                                gridGap:'1rem',
                                justifyItems:'center',
                                alignItems:'center',
                                margin:'1rem',
                                padding: '1rem'
                               }}
                               >
                                {track_list.map(item=> 
                                {
                                   return <Track key={item.track.track_id} track={item.track}/>
                                }
                                )}
                               </div> 
                            </div>

                            </React.Fragment>
                        )
                       
                }

                }
         
            </Consumer>
        )

    }
}

export default Tracks;