import React from "react";
import Footer from './Footer'
import styled from 'styled-components'

const CardDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const NasaImg = styled.img`
    max-width:945px;
    border:10px solid dodgerblue;
    border-radius:5px;
`

const NasaPara = styled.p`
    width:90%;
    text-align: left;
`

const PhotoCard = props => {
    const {photoTitle, photoDate, photoURL, photoDesc, photoCopy} = props;

    return (
        <CardDiv>
            <h3>{photoDate}</h3>
            <h2>{photoTitle}</h2>
            <NasaImg alt={photoTitle}  src= {photoURL} />
            <NasaPara>{photoDesc}</NasaPara> 
            <Footer copyInfo = {photoCopy} />        
        </CardDiv>
    )
}

export default PhotoCard