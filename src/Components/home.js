import React from 'react'
 
import './HeroSection.css';
function Home() {
  
  return (
    <div className='hero-container' id='home'>
    

        <div className='text-home-cont-one'>
<p className='text-home-one'> Have You filled <span className='span-home'>Nabdidh Survey</span>?</p>

        </div>
        <div className='text-home-cont-two'>
<p className='text-home-two'> Is your EMR <span className='span-home'>Nabdidh compliant</span>?</p>

        </div>
        <div className='text-home-cont-three'>
<p className='text-home-three'>Have you ever heared about <span className='span-home'>Nabdidh</span>?</p>

        </div>
        <div className='text-home-cont-four'>
<p className='text-home-four'>Have you ever heared about <span className='span-home'>Nabdidh</span>?</p>

        </div>
        <div className='lost-cont'>
<p className='lost-text'> Lost <span className='span-home'>?</span></p>
<div>
  <p className='lost-here'>We are here to assist you on any question related to nabidh</p>
</div>
        </div>
 
    </div>
  )
}

export default Home