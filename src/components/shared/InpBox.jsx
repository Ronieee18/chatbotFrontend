import React from "react";
import {TextField} from '@mui/material'

const InpBox=(props)=>{
    return <TextField 
    autoComplete="off"
    margin="normal"
    InputLabelProps={{style:{color:'white'}}}
    inputProps={{style:{color:'white',borderRadius:10,width:'350px'}}}
    
    name={props.name} label={props.label} type={props.type} placeholder={props.placeholder}  />
}
export default InpBox;