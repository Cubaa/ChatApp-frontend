import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar/Navbar'


export const MainPage:React.FC = ()=>{
    return(
        <>
                <NavbarWrapper>
                    <Navbar />
                </NavbarWrapper>
        </>
    )
}

const NavbarWrapper = styled.nav`
position: sticky;
top:0;
display: flex;
align-items: center;
width: 100%;
padding: 1.5em;
background-color: whitesmoke;
`