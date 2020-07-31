import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './Nav'
import styled from 'styled-components'


const Header = props => {
    const { photoDate, setDate } = props
    
    const AppHeader = styled.header`
        background: dodgerblue;
        padding: 20px 0;
    `

    const Headline_1 = styled.h1`
        color: floralwhite;
        margin-top:0;
        padding-bottom: 15px;
    ` 
    return (
        <AppHeader>
            <Headline_1>NASA Photo of the Day</Headline_1>
            <Nav photoDate = { photoDate } setDate={ setDate } />
        </AppHeader>
    )
}

export default Header;