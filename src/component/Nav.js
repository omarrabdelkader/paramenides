import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"

const Nav = ()  => {

  const [isToggled, setIsToggled] = useState(false)
  return (
    <ul>
        <li>
            <div className='dropdown'>
            <Link to='/' className='btn-1'> 
             Home
            </Link>
            </div>
        </li>
        <li>
            <div className='dropdown'>
            <Link to='/aboutus' className='btn-3'> 
            About us
            </Link>
            </div>
        </li>
        <li>
            <div className='dropdown'>
            <button className='btn-3' onClick={() => setIsToggled(!isToggled)}> 
            Company
            <FontAwesomeIcon icon={faCaretDown} className='arrow-icon'></FontAwesomeIcon>
            </button>
            {isToggled ? <div className='company-border'><p>My first project</p>
            </div> : ''}
            </div>
        </li>
        <Link to = '/signin' className = 'btn-sign' type='button'>Sign in</Link>
    </ul>
  )
}

export default Nav