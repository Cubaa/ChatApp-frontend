import React from 'react'
import styled from 'styled-components'
import { LeftSideNav } from './LeftSideNav/LeftSideNav';
import { RightSideNav } from './RightSideNav/RightSideNav';

export const Navbar:React.FC = () =>{
    return(
        <>
            <LeftSideNavWrapper>
                <LeftSideNav />
            </LeftSideNavWrapper>
            <RightSideNavWrapper>
                <RightSideNav />
            </RightSideNavWrapper>
        </>
    )
}

const LeftSideNavWrapper = styled.div`
flex-grow: 1;
font-family: 'Roboto';
letter-spacing: 2px;
`

const RightSideNavWrapper = styled.div`
display: flex;
flex-grow: 0.1;
justify-content: space-evenly;
`