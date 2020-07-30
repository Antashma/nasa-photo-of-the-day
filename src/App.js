import axios from 'axios';
import React, { useEffect } from "react";
import "./App.css";
import {Header} from './Header/Header'

function App() {
  useEffect(( ) => {
    axios
      .get('https://api.nasa.gov/planetary/apod?date=2020-07-04&api_key=FljG5ofq0UasubX3hd8YX0TTZh1UWnezZdALhfjc')
      .then((success) => {
        console.log('Mission Successful 🚀', success)
      })
      .catch((failure) =>{
        console.log('Mission Failed 👾', failure)
      })
  }, [])
  return (
    <div className="App">
      <Header />
      {/* 
      <Photo-Card />
      <Footer /> */}
    </div>
  );
}

export default App;
