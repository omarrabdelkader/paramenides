import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import React, {useState, useEffect} from 'react'


function Signin() {
  const initialValues = {username:'', email:'', password:''}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const [visible, setVisible] = useState('password')
  const [icon, setIcon] = useState(faEyeSlash)

  const handleToggle = () => {
   if (visible === 'password') {
     setIcon(faEye)
     setVisible('text')
   } else {
     setIcon(faEyeSlash)
     setVisible('password')
   }

   
  }
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = (e) => {
      e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

 useEffect(() => {
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
       console.log(formValues)
 }
}, [formErrors])
  const validate = (value) => {
   const errors = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!value.username) {
     errors.username = 'Username is required'
   }
   if (!value.email) {
    errors.email = 'Email is required'
  } else if (!regex.test(value.email)){
    errors.email = 'This email is not valid'
  }
  if (!value.password) {
    errors.password = 'Password is required'
  } else if (value.password < 4) {
    errors.password = 'Your password must be more than 4 characters'
  } else if (value.password < 10) {
    errors.password = 'Your password must be less than 10 characters'
  }
  return errors
  }
  return (
    <div className="container-form">
      {Object.keys(formErrors).length === 0 && isSubmit ? 
      <div className='ui message success'>Signed in successfully</div> : ''}
      <form onSubmit = {handleSubmit}>
        <h2>Login</h2>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange = {handleChange}
            />
            <p className='form-p'>{formErrors.username}</p>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange = {handleChange}
            />
          <p className='form-p'>{formErrors.email}</p>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="password_container">
            <input
              type={visible}
              className="password_input"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange = {handleChange}
            />
            <FontAwesomeIcon icon={icon} className='eye' onClick={handleToggle}></FontAwesomeIcon>
            </div>
            <p className='form-p'>{formErrors.password}</p>
          </div>
          <button className="submit-btn">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Signin