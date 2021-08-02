import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccessTime from '@material-ui/icons/AccessTime';
import {Link} from "react-router-dom";

export const RightSideNav:React.FC = ()=>{
    return(
        <>
        <Button component={Link} to="/signin" variant="contained" color="primary" startIcon={<AccessTime />} style={{marginRight: "5px", backgroundColor: "#b6a6ca"}}>Sign in</Button>
        <Button component={Link} to="/signup" variant="contained" color="primary" startIcon={<AccountCircle />} style={{backgroundColor: "#b6a6ca"}}>Sign up</Button>
        </>
    )
}