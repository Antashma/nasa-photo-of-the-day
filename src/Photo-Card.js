import React from "react";
import Footer from './Footer'


const PhotoCard = props => {
    const {photoTitle, photoDate, photoURL, photoDesc, photoCopy} = props;

    return (
        <div>
            <h3>{photoDate}</h3>
            <h2>{photoTitle}</h2>
            <img alt={photoTitle} src= {photoURL} />
            <p>{photoDesc}</p> 
            <Footer copyInfo = {photoCopy} />        
        </div>
    )
}

export default PhotoCard