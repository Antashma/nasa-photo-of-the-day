import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'



export const Nav = props => {
    const { photoDate, setDate } = props

    const navItems = [
        {text: 'NASA Website',
        link: 'https://www.nasa.gov'},
        {text: 'Home',
        link: 'http://localhost:3000/'}
    ]

    const Anchor = styled.a`
    display:inline-block;
    border-radius: 3px;
    padding: 20px;
    background: transparent;
    color: floralwhite;
    font-weight: bold;
    text-decoration:none;
    border: 2px solid floralwhite;
    min-width:200px;
    `

    const AppNav = styled.nav`
        display:flex;
        justify-content: space-around
    `
    
    return (
        <AppNav>

        {navItems.map((item, index) =>  
            <Anchor key={index} href={item.link}>{item.text}</Anchor>
        )}

        <Anchor href='#' onClick={() => setDate('&date=2019-10-02')}>Featured Photo</Anchor>

        </AppNav>
    )
}