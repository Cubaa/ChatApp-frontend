import React, {useRef} from 'react'
import styled from 'styled-components'
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {IUserDataRegisterType} from '../../../Types/userRegisterDataTypes'


export const SignIn:React.FC = ()=>{
    const formEl = useRef<any>(null)
   
    const handleSignIn = ()=>{
        const formData = new FormData(formEl.current)
   
        console.log(formData.get('email'), typeof formData.get('password'))

        const userRegisterData: any = {
            email: formData.get('email'),
            password: formData.get('password'),
        }

        console.log(userRegisterData)
       
    }

    return(
        <>
            <h1>Sign in</h1>
            <Form ref = {formEl}>
                <FormControl>
                    <InputLabel htmlFor="email-input">Email</InputLabel>
                    <Input id="email-input" aria-describedby="my-helper-text" name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input type="password" id="password-input" aria-describedby="my-helper-text" name="password" />
                </FormControl>
                <Button onClick={()=>handleSignIn()} variant="contained" color="primary">Sign in</Button>   
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
        margin-top: 4rem;
    }
}
`