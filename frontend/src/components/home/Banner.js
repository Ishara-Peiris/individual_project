
import React from 'react'
import Button from './Button';
import './Banner.css'
export default function Banner() {
  return (
    
      <div>
    <div className='banner-upper'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5F6FFF" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,224C840,256,960,288,1080,261.3C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>    
</div>
<div className='banner'>

        <h1>Your Journey to Healing Starts Here...</h1>
        <p>Book a session today and take the first step</p>
        <Button text="  Book a Session   "/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,224C840,256,960,288,1080,261.3C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>    </div>
          
    
    </div>
    
  )
}
