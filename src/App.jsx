import { useContext, useState } from 'react'

import './App.css'
import Header from './components/Header'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Chats from './pages/Chats'
import PageNotFound from './pages/PageNotFound'
import { AuthContext } from './context/AuthContext'

function App() {
 
  const useAuth=useContext(AuthContext);

  return (
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        { useAuth?.isLoggedIn && useAuth.user&&(
        <Route path='/chat' element={<Chats/>}/>
        )}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </main>
  )
}

export default App
