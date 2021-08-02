import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'

export const LoadingPage:React.FC = (props) => {
    return(
        <>
            <ReactLoading type="spin" color="#000" />
        </>
    )
}