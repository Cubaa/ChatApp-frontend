import React, {useRef} from 'react'
import styled from 'styled-components'
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {IUserDataRegisterType} from '../../../Types/userRegisterDataTypes'
import "../../../services/AuthService";
import AuthService from "../../../services/AuthService";


export const SignUp:React.FC = ()=>{
    const formEl = useRef<any>(null)
   
    const handleSignUp = ()=>{
        const formData = new FormData(formEl.current)
   
        const userRegisterData: any = {
            username: formData.get('username'),
            first_name: formData.get('firstname'),
            last_name: formData.get('lastname'),
            email: formData.get('email'),
            password: formData.get('password'),
            password2: formData.get('password2'),
        }

        AuthService.registerUser(userRegisterData).then((response) => {
            console.log(response);
        });
       
    }

    return(
        <>
            <h1>Sign up</h1>
            <Form ref = {formEl}>
                <FormControl>
                    <InputLabel htmlFor="username-input">Username</InputLabel>
                    <Input id="username-input" aria-describedby="my-helper-text" name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="name-input">First Name</InputLabel>
                    <Input id="name-input" aria-describedby="my-helper-text" name="firstname" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="lastname-input">Last Name</InputLabel>
                    <Input id="lastname-input" aria-describedby="my-helper-text" name="lastname" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input id="email-input" aria-describedby="my-helper-text" name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input type="password" id="password-input" aria-describedby="my-helper-text" name="password" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password2-input">Password</InputLabel>
                    <Input type="password" id="password2-input" aria-describedby="my-helper-text" name="password2" />
                </FormControl>
                <Button onClick={()=>handleSignUp()} variant="contained" color="primary">Register</Button>   
            </Form>
        </>
    )
}

const Form = styled.form`

@media (max-width: 767px) {
display: flex;
flex-direction: column;
width: 100%;
padding: 2rem;
>div{
    width: 100%;
    margin: 1rem 0;
}
>button{
    margin-top: 1.3rem;
}
}
@media (min-width: 500px){
display: flex;
flex-direction: column;
width: 90%;
padding: 2rem;
>div{
    width: 100%;
    margin: 1rem 0;
}
>button{
    margin-top: 1.3rem;
}
}

@media (min-width: 768px){
    margin-top: 2rem;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
>div{
width: calc(50% - 8px);
margin-right: 8px;
}
>button{
        margin-top: 2rem;
    }
}
@media (min-width: 1024px){
    margin-top: 2rem;
    width: 65%;
    >button{
        margin-top: 2rem;
    }
}
`