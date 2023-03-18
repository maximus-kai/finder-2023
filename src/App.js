import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './Context';
import Lyrics from './components/tracks/Lyrics';


class App extends Component{
  render(){
    return (
      <Provider>
      <Router>
      <React.Fragment>
        Working fine, as of march 18, 2023.
            <Navbar/>
        <div >
          <Routes>
            <Route  path='/' element = {<Index/>} />
            <Route  path='lyrics/track/:id' element = {<Lyrics/>} />
          </Routes>
        </div>
      </React.Fragment> 
      </Router>
      </Provider>
    );

  }
};

export default App;
