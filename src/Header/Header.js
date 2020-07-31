import React from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './Nav'


const Header = props => {
    const { photoDate, setDate } = props
    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <Nav photoDate = { photoDate } setDate={ setDate } />
        </div>
    )
}

export default Header;