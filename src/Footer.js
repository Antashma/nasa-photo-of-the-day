import React from 'react'
import styled from 'styled-components'

const AppFooter = styled.footer`
    background: dodgerblue;
    margin: 0;
`

const Footer = props => {
    const { copyInfo } = props
    return (
        <AppFooter>
        <p>Photo &copy; {copyInfo}</p>
        </AppFooter>
    )

}

export default Footer