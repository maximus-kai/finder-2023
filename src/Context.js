import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks'
    }
    componentDidMount(){
        axios.get()
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
}
}


export const Consumer = Context.Consumer;