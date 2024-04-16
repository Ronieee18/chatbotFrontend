import { Box } from '@mui/material'
import React from 'react'
import TypeAnim from '../components/shared/TypeAnimation'

function Home() {
  return (
    <Box width={'100%'} height={'100%'} >
      <Box sx={{
        mt:6,
        display:'flex',
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        mx:'auto'
      }}>
      <Box><TypeAnim/></Box>
      <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},width:'100%',gap:10,justifyContent:'center',alignItems:'center',my:7}}>
        <img  src="airobot.png" height={'300px'} alt="robot" />
        <img className="gpt" src="openai2.png" height={'300px'} alt="chatgpt" />
      </Box>
      </Box>
    </Box>
  )
}

export default Home