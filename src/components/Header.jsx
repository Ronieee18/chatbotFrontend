import React,{useContext} from 'react'
import {AppBar,Toolbar} from '@mui/material'
import Logo from './shared/Logo'
import { AuthContext } from '../context/AuthContext';
import NavLink from './shared/NavLink';
import { useNavigate } from "react-router-dom";



function Header() {
  const useAuth=useContext(AuthContext);
  const navigate=useNavigate();
  return (
    <AppBar sx={{bgcolor:'transparent',position:'static',boxShadow:'none'}}>
      <Toolbar sx={{width:'80vh'}}>
        <Logo/>
        {useAuth?.isLoggedIn ?(<>
        <NavLink bg="#00fffc" to="/chat" text="Go To Chat" textColor="black"/>
        <NavLink bg="#51538f" to="/" text="Logout" textColor="white" onClick={useAuth.logout}/>
        </>):
        (<>
          <NavLink bg="#00fffc" to="/login" text="Login" textColor="black"/>
          <NavLink bg="#51538f" to="/signup" text="SignUp" textColor="white"/>
          </>)
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header