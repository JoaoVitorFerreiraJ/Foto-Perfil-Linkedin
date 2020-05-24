import React from 'react';

import './styles.css'


import reactImg from '../assets/React.png'
import nodeImg from '../assets/Node.png'
import reduxImg from '../assets/Redux.png'
import typescriptImg from '../assets/Typescript.png'
import hooksImg from '../assets/Hooks.jpg'



export default function Profile() {
  return (
      <div className='profile-container'>
          <div className='react'>
              <div className='react-img'>
                <img src={reactImg} alt='react' />
              </div>
          </div>
          <div className='node'> 
              <img src={nodeImg} alt='node'/>
          </div>
          <div className='typescript'>
              <img src={typescriptImg} alt='typescript'/>
          </div>
          <div className='redux'>
              <img src={reduxImg} alt='redux'/>
          </div>
          <div className='hooks'>
            <img src={reactImg} alt='hooks'/>  
          </div>

      </div>
  )
}

