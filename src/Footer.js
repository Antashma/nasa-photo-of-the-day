import React from 'react'


const Footer = props => {
    const { photoCopy } = props
    return (
        <p>Photo &copy; {photoCopy}</p>
    )

}

export default Footer