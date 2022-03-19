import React from 'react'
import MiddleContainer from './MiddleContainer';
import img1 from '../images/phone.svg';

function Section() {
  return (
    <main>
    <section>
    <div className='main-container'>
    <MiddleContainer/>
    <div className='phone-model'>
    <div>
    <img  className='phone-img'src={img1} alt=''/>
    </div>
    </div>
    </div>
    </section>
  </main>
  )
}

export default Section