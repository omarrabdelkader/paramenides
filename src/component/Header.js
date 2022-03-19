import React from 'react'
import Nav from './Nav'
import Section from './Section'

function Header() {
  return (
    <>
    <header>
    <div className='header-container'> 
    <h1>Parmendies</h1>
      <nav>
      <Nav/>
      </nav>
    </div>
    </header>
    </>
  )
}

export default Header