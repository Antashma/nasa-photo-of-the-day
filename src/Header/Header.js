import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './Nav'


const Header = props => {
    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <Nav />
        </div>
    )
}

export default Header;