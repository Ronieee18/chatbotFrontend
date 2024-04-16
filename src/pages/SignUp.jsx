import React,{useContext,useEffect} from 'react'
import {Box, Typography,Button} from '@mui/material'
import { AuthContext } from '../context/AuthContext'
import InpBox from '../components/shared/InpBox'
import {toast} from 'react-hot-toast'
import { IoLogInOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const useAuth=useContext(AuthContext);
  const navigate=useNavigate(); 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget);
    const name=formData.get("name");
    const email=formData.get("email");
    const password = formData.get("password");
    try {
      toast.loading("Creating your account",{id:"signup"})
      await useAuth?.signup(name,email,password);
      toast.success("Account created SuccessFully",{id:"signup"})

      navigate('/login');
      
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data === "User already registered") {
        toast.error("User already registered",{id:"signup"})
        
      }
      else if (error.response && error.response.data.errors[0].msg === "Name is required") {
        toast.error("Name is required",{id:"signup"})
      }
      else if (error.response && error.response.data.errors[0].msg === "Email is required") {
        toast.error("Email is required",{id:"signup"})
      }
      else if (error.response && error.response.data.errors[0].msg === "Password must be more than 6 characters") {
        toast.error("Password must be more than 6 characters",{id:"signup"})
      }
      else{
        toast.error("SignUp Failed",{id:"signup"})
      }
    }
    
  }
  useEffect(()=>{
    if(useAuth?.isLoggedIn){
      return navigate('/');
    }
  },[useAuth?.isLoggedIn,navigate])
  return (
    <Box width={'100%'} height={'100%'} display={'flex'}>
      <Box padding={8}  display={{md:"flex",sm:"none",xs:"none"}}>
        <img src="airobot.png" alt="Robot" style={{width:'400px'}} />
      </Box>
      <Box display={'flex'} flex={{xs:'1',md:'0.5'}} justifyContent={'center'} alignItems={'center'}
      padding={2}
      mt={15}
      ml={'auto'}
      >
        <form 
        onSubmit={handleSubmit}
        style={{margin:'auto',padding:'30px',boxShadow:'10px 10px 20px #000',borderRadius:"10px",border:'none'}}>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'8px'}}>
            <Typography variant='h4' textAlign={'center'} padding={2} fontWeight={600}>SignUp</Typography>
            <InpBox  name="name" type="text" label="Name" placeholder="Enter your Name"/>
            <InpBox  name="email" type="email" label="Email" placeholder="Enter your email"/>
            <InpBox name="password" type="password" label="Password" placeholder="Enter your Password" />
            <Button type='submit' sx={{px:2,py:1.5,color:'black',mt:2,width:'400px',borderRadius:2,bgcolor:'#00fffc',":hover":{
              bgcolor:'white',
              color:'black',
            }}}
            endIcon={<IoLogInOutline/>}
            >Sign Up</Button>
          </Box>
          <p>Already have an account?<a href='/login'><u><Typography sx={{fontSize:'18px',textDecorationLine:'underline'}}>Log In</Typography></u></a> </p>
          <p>Try: Email: ronit@gmail.com</p>
          <p>Password:123456</p>

        </form>
      </Box>
    </Box>
  )
}

export default SignUp