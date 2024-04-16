import axios from "axios";

export const loginUser=async(email,password)=>{
    const res=await axios.post('/user/login',{email,password});
    if(res.status!==200){
        throw new Error("Unable  to login")
    }
    const data=await res.data;
    return data;


}
export const signUpUser=async(name,email,password)=>{
    const res=await axios.post('/user/signup',{name,email,password});
    if(res.status!==201){
        throw new Error("Unable  to Signup")
    }
    const data=await res.data;
    return data;


}

export const checkStatus=async()=>{
    const res=await axios.get('/user/auth-status');
    if(res.status!==200){
        throw new Error("Unable  to authenticate")
    }
    const data=await res.data;
    return data;


}
export const chatRequest=async(message)=>{
    const res=await axios.post('/chats/new',{message});
    if(res.status!==200){
        throw new Error("Unable  to send chat")
    }
    const data=await res.data;
    return data;


}
export const getuserchats=async(message)=>{
    const res=await axios.get('/chats/allchats');
    if(res.status!==200){
        throw new Error("Unable  to get chat")
    }
    const data=await res.data;
    return data;


}
export const deleteuserchats=async(message)=>{
    const res=await axios.delete('/chats/deletechat');
    if(res.status!==200){
        throw new Error("Unable  to delete chat")
    }
    const data=await res.data;
    return data;


}
export const logoutUser=async()=>{
    const res=await axios.get('/user/logout');
    if(res.status!==200){
        throw new Error("Unable to Logout user")
    }
    const data=await res.data;
    return data;


}