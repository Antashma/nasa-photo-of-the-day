import axios from 'axios';
import React, { useState, useEffect } from "react";
import "./App.css";
import {Header} from './Header/Header'
import {PhotoCard} from './Photo-Card'

function App() {
  const [nasaData, setNasaData] = useState({})
  useEffect(( ) => {
    axios
      .get('https://api.nasa.gov/planetary/apod?date=2020-07-04&api_key=FljG5ofq0UasubX3hd8YX0TTZh1UWnezZdALhfjc')
      .then((success) => {
        console.log('Mission Successful 🚀', success); 
        setNasaData(success.data) 
        
      })
      .catch((failure) =>{
        console.log('Mission Failed 👾', failure)
      })
  }, [])

  return (
    <div className="App">
      {console.log('nasaData value', nasaData)} 
      <Header />
      <PhotoCard 
        photoDate = {nasaData.date} 
        photoTitle = {nasaData.title} 
        photoURL = {nasaData.url} 
        photoDesc = {nasaData.explanation}
        photoCopy = {nasaData.copyright}
      />
      {/* <Footer /> */}
    </div>
);
}

export default App;
