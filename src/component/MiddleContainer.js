import React from 'react'
import { Link } from 'react-router-dom'

function MiddleContainer() {
  return (
    <div className='paragraph-side'>
    <h2>Payments<br/>infrastructure<br/>for the internet</h2>
    <p className='p-main'>Millions of companies of all sizes-from startups to Fortune 500s-use Parmendies'
    <br/>software and APIs to accept payments, send payouts, and manage their
    <br/>businesses online</p>
    <Link to = '/signup' className='start-btn'>Start now</Link>
    </div>
      )
}

export default MiddleContainer