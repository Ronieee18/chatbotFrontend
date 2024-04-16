import { Avatar, Box, Typography } from "@mui/material";
import React,{useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import CodeBlock from "../CodeBlock";


const Chat=(props)=>{
    const useAuth=useContext(AuthContext);
    const name = useAuth?.user?.name || ""; // Provide an empty string as fallback
    const fname = name[0] || ""; // Safe access with fallback
    const lname = name.split(" ")[1]?.[0] || ""; // Safely access the second word's first letter, with fallbacks

    return props.role==='assistant'?
    <Box sx={{display:'flex',p:2,gap:2,bgcolor:'#004d5612'}}>
        <Avatar sx={{ml:0}}>
            <img className="aiimage" src="openai.png" alt="AI" width={'30px'} />    
        </Avatar>
        <Box><Typography sx={{fontSize:'15px'}}>
            <CodeBlock content={props.content}/>
            </Typography></Box>  
    </Box>
    : //If role is user
    <Box sx={{display:'flex',p:2,bgcolor:'#004d56',alignItems:'center',gap:2}}>
        <Avatar sx={{bgcolor:"white",color:"black",fontWeight:700}}>{fname}{lname}</Avatar>

        <Box sx={{width:'100%',overflowX:'hidden'}}><Typography sx={{fontSize:'15px'}}>{props.content}</Typography></Box>
    </Box>
}
export default Chat