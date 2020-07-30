import React from 'react'


const Footer = props => {
    const { copyInfo } = props
    return (
        <footer>
        <p>Photo &copy; {copyInfo}</p>
        </footer>
    )

}

export default Footer