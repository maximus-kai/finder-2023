import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();


export class Provider extends Component {

    options = {
        method: 'GET',
        url: 'https://cors-proxy4.p.rapidapi.com/',
        params: {
          url: `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
        },
        headers: {
          'X-RapidAPI-Key': '1386846032mshffd07fea16699c2p103a45jsn15c59ab9be78',
          'X-RapidAPI-Host': 'cors-proxy4.p.rapidapi.com'
        }
      };

    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    }
    componentDidMount(){
        axios.request(this.options)
        .then(res =>    
            {
                // console.log(res)
                this.setState({track_list: res.data.message.body.track_list})

            })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                 {this.props.children}
              </Context.Provider>
    );
};
};


export const Consumer = Context.Consumer;
// https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=US&f_has_lyrics=1&apikey=901e2b486af70472c5feefd86769a9d6
// cors-anywhere.herokuapp.com/

// very useful for cors
// https://rapidapi.com/condacore/api/cors-proxy4