import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { LoadingPage } from './components/LoadingPage/LoadingPage';
import {GlobalStyle} from './GlobalStyles/GlobalStyles'
import {motion} from 'framer-motion'
import { MainPage } from './components/MainPage/MainPage';
import { SignIn } from './components/MainPage/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SignUp } from './components/MainPage/SignUp/SignUp';

function App() {
  const [isloadingPage, setIsLoadingPage] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
        setIsLoadingPage(false)
    }, 2000)
  })
  
  if(isloadingPage)
    return(
      <div className="App">
        <GlobalStyle />
        <LoadingPageWrapper 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            <LoadingPage/>
        </LoadingPageWrapper>
      </div>
    )
  else return(
      <div className="App" >
        <Router>
         <GlobalStyle />
            <Switch>
              <Route path="/" exact>
                <AppWrapper 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                >
                  <MainPage />
                </AppWrapper>
              </Route>
              <Route path="/signin" >
                <SignInWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                >
                  <SignIn />
                </SignInWrapper>
              </Route>
              <Route path="/signup" >
                <SignUpWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                >
                  <SignUp />
                </SignUpWrapper>
              </Route>
            </Switch>
        </Router>
      </div>
  )
  
}

export default App;


const LoadingPageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #e1dee9;
 
`
const AppWrapper = styled(motion.div)`
  background-color: #e1dee9;
 
`

const SignInWrapper = styled(motion.div)`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
width:100%;
display: flex;
flex-direction: column;
align-items: center;
h1{
  margin-top: 1rem;
  color: darkblue;
  font-family: 'Source Sans Pro', sans-serif;
}
@media (min-width: 1024px){
  h1{
    margin-top: 2rem;
  }
  @media (min-width: 768px){
  h1{
    margin-top: 2rem;
  }
}
}
`

const SignUpWrapper = styled(motion.div)`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
width:100%;
display: flex;
flex-direction: column;
align-items: center;
h1{
  margin-top: 1rem;
  color: darkblue;
  font-family: 'Source Sans Pro', sans-serif;
}
@media (min-width: 1024px){
  h1{
    margin-top: 2rem;
  }
  @media (min-width: 768px){
  h1{
    margin-top: 2rem;
  }
}
}
`