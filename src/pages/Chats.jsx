import React,{useContext, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {Box,Avatar, Typography, Button, IconButton} from '@mui/material'
import { AuthContext } from '../context/AuthContext'
import { red } from '@mui/material/colors';
import Chat from '../components/chats/Chat';
import {IoMdSend} from 'react-icons/io'
import { chatRequest, deleteuserchats, getuserchats } from '../components/helper/api';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


function Chats() {
  const navigate=useNavigate();
  const inputRef=useRef(null);
  const useAuth=useContext(AuthContext);
  const nameParts = useAuth?.user?.name?.split(" ");
  const fname = nameParts?.[0]?.[0]; // First letter of the first name
  const lname = nameParts?.length > 1 ? nameParts[1][0] : ''; // First letter of the last name, if it exists

  const [chatMessages,setChatMessages]=useState([]);

  

  const handleSubmit=async()=>{
    const content=inputRef.current?.value;
    if(inputRef &&inputRef.current){    
      inputRef.current.value='';
    }
    const newMessage={role:'user',content}
    setChatMessages((prev)=>[...prev,newMessage]);
    const chatData=await chatRequest(content);
    setChatMessages([...chatData.chats])

  } 

  const handledeleteChats=async()=>{
    try {
      toast.loading("Deleting chats..",{id:'delete'});
       await deleteuserchats();
       toast.success("Chats Deleted..",{id:'delete'});

       toast.loading("Loading chats...", { id: 'chats' });
      const data = await getuserchats();
      setChatMessages([...data.chats]);
      toast.success("Chats loaded..",{id:'chats'});
    } catch (error) {
      console.log(error)
      toast.error("Unable to delete Chats",{id:'delete'});
    }
  }

  useLayoutEffect(()=>{
    if(useAuth?.isLoggedIn && useAuth.user){
      toast.loading('loading chats',{id:'chats'})
      getuserchats().then((data)=>{
        setChatMessages([...data.chats])
        toast.success('chats loaded',{id:'chats'})

      }).catch(err=>{
        console.log(err);
        toast.error('Cannot load chats',{id:'chats'})

      })
    }
  },[useAuth])

  useEffect(()=>{
    if(!useAuth?.user){
      return navigate('/login');
    }
  },[])

  return (
    <Box sx={{display:'flex', flex:1,width:'100%',height:"100%",mt:3,gap:3}}>
      <Box sx={{display:{md:"flex",xs:"none",sm:"none"},flex:0.2,flexDirection:'column'}}>
        <Box sx={{display:'flex',width:'100%',height:"60vh",bgcolor:"rgb(20,29,39)",borderRadius:5,mx:3,flexDirection:'column'}}>
          
          <Avatar sx={{mx:"auto",my:2,bgcolor:"white",color:"black",fontWeight:700}}>{fname}{lname}</Avatar>
          <Typography sx={{mx:'auto',fontFamily:'work sans',}}>You are talking to a CHATBOT</Typography>
          <Typography sx={{mx:'auto',fontFamily:'work sans',}}>
            It is to solve your queries regarding business,tech,give advices,etc.
            *Please avoid sharing personal information
          </Typography>
          <Button onClick={handledeleteChats} sx={{width:'200px',my:'auto',color:'white',fontWeight:'700',borderRadius:3,mx:'auto',bgcolor:red[600],":hover":{
            bgcolor:red.A400
          }}}>Clear Conversation</Button>

        </Box>
      </Box>
      <Box sx={{display:'flex',flex:{md:0.8,sm:1,xs:1},ml:4,width:'50%',flexDirection:'column'}}>
        <Typography sx={{color:'white',fontSize:'25px',mb:2,mx:'auto'}}>
          Model- Chatgpt 3.5 Turbo
        </Typography>
        <Box sx={{textAlign:'left',width:'100%',height:'60vh',borderRadius:3,display:'flex',flexDirection:'column',overflow:'scroll',overflowY:'auto',overflowX:'hidden',scrollBehavior:'smooth'}}>
          {chatMessages.map((chat,index)=>(
              
                  <Chat role={chat.role} content={chat.content}  key={index}/>
              
            // 
          ))}
        </Box>  
        <div style={{width:'90%',padding:'15px',borderRadius:8,backgroundColor:'rgb(17,27,39)',display:'flex',marginRight:'auto',marginTop:'5px'}}>
        <input ref={inputRef} type="text" style={{width:'100%',backgroundColor:"transparent",padding:'7px',marginBottom:'5px',border:'none',outline:'none',color:'white',fontSize:'16px'}} />
        <IconButton onClick={handleSubmit} sx={{ml:'auto',color:'white'}}>{<IoMdSend/>}</IconButton>
        </div>
      </Box>
    </Box>
  )
}

export default Chats