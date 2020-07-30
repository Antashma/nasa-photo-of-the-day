import React from 'react'
import ReactDOM from 'react-dom'

const navItems = [
    {text: 'NASA Website',
    link: 'https://www.nasa.gov'},
    {text: 'Home',
    link: 'http://localhost:3000/'},
    {text: 'Yesterday\'s Photo',
    link:'#'}
]

export const Nav = props => {
    return (
        <nav>

        {navItems.map((item, index) =>  
            <a key={index} href={item.link}>{item.text}</a>
        )}
        </nav>
    )
}