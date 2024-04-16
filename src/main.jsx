import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createTheme,ThemeProvider} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
axios.defaults.baseURL="https://chatbot-backend-pb01.onrender.com/api/v1"  //production server
axios.defaults.withCredentials=true;

const theme=createTheme({
  typography:{
    fontFamily:"Roboto Slab,serif",
    allVariants:{color:"white"}
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme} >
      <Toaster position='top-right' toastOptions={{style:{fontSize:'15px'}}}/>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
