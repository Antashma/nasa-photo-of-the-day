import React from 'react'
import ReactDOM from 'react-dom'



export const Nav = props => {
    const { photoDate, setDate } = props

    const navItems = [
        {text: 'NASA Website',
        link: 'https://www.nasa.gov'},
        {text: 'Home',
        link: 'http://localhost:3000/'}
    ]
    return (
        <nav>

        {navItems.map((item, index) =>  
            <a key={index} href={item.link}>{item.text}</a>
        )}

        <a href='#' onClick={() => setDate('&date=2019-10-02')}>Featured Photo</a>

        </nav>
    )
}