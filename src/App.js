import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './Header/Header'
import PhotoCard from './Photo-Card'



function App() {
  const [photoDate, setPhotoDate] = useState('&date=2020-07-30')
  const [nasaData, setNasaData] = useState({})

  useEffect(( ) => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=FljG5ofq0UasubX3hd8YX0TTZh1UWnezZdALhfjc${photoDate}`)
      .then((success) => {
        console.log('Mission Successful 🚀', success); 
        setNasaData(success.data) 
        
      })
      .catch((failure) =>{
        console.log('Mission Failed 👾', failure)
      })
  }, [photoDate])

  return (
    <div className="App">
      {/* possible stretch item
      
      <button onClick={ () => 
        setPhotoDate(`&date=${'2020-07-04'}`)} >
        Change Date</button> */}
      <Header photoDate = {photoDate} setDate = {setPhotoDate}/>
      <PhotoCard 
        photoDate = {nasaData.date} 
        photoTitle = {nasaData.title} 
        photoURL = {nasaData.url} 
        photoDesc = {nasaData.explanation}
        photoCopy = {nasaData.copyright}
      />
    </div>
);
}

export default App;
