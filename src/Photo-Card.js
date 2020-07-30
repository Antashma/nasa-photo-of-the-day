import React from "react";


const PhotoCard = props => {
    const {photoTitle, photoDate, photoURL, photoCopy, photoDesc} = props;

    return (
        <div>
            <h3>{photoDate}</h3>
            <h2>{photoTitle}</h2>
            <img alt='NASA photo of the day' src= {photoURL} />
            <p>&copy; {photoCopy}</p>
            <p>{photoDesc}</p>
            
        </div>
    )
}

export default PhotoCard