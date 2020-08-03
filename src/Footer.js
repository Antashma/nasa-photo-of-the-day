import React from 'react'
import styled from 'styled-components'

const FooterCopy = styled.p`
    font-weight: bold;
`

const Footer = props => {
    const { copyInfo } = props
    return (
        <footer>
        <FooterCopy>Photo &copy; {copyInfo}</FooterCopy>
        </footer>
    )

}

export default Footer