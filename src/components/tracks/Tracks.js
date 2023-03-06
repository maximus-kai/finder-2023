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
                            <h3 className='mb-4 text-center' > {heading} </h3>
                               <div>
                                {track_list.map(item=> 
                                {
                                   return <Track key={item.track.track_id} track={item.track}/>
                                }
                                )}
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