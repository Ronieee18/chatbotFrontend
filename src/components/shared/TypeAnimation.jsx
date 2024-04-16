import React from 'react'
import {TypeAnimation} from 'react-type-animation'

function TypeAnim() {
  return (
    <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Chat with your Own AI',
    1000,
    'Built With OpenAI',
    1000,
    'A basic customized ChatGPT',
    1000,
    'Built with ❤️ by Ronit Parwani',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '40px',color:'white',display:'inline-block',textShadow:'1px 1px 20px #000'}}
  repeat={Infinity}
/>
  )
}

export default TypeAnim
