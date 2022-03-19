import React, {useState} from 'react'
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Signup() {
    const initialValues = {username:'', email:'', password:'', comfirmPassword:''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSumbit] = useState(false);

    const [visible, setVisible] = useState('password')
    const [visible2, setVisible2] = useState('password')
    const [icon2, setIcon2] = useState(faEyeSlash)
    const [icon, setIcon] = useState(faEyeSlash)

    const handleToggle = () => {
      if (visible === 'password') {
        setVisible('text')
        setIcon(faEye)
      } else {
        setVisible('password')
        setIcon(faEyeSlash)
      }
    }

    const handleToggle2 = () => {
      if (visible2 === 'password') {
        setVisible2('text')
        setIcon2(faEye)
      } else {
        setVisible2('password')
        setIcon2(faEyeSlash)
      }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSumbit(true)
    }

    const validate = (value) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value.username) {
            errors.username = 'Please fill out this field'
        }
        if (!value.email) {
            errors.email = 'Please fill out this field'
        } else if (!regex.test(value.email)) {
            errors.email = 'Invalid email form'
        }
        if (!value.password && !value.comfirmPassword) {
            errors.password = 'Please fill out this field'
            errors.comfirmPassword = 'Please fill out this field'
             } else if (value.password < 4) {
            errors.password = 'Your password is less than 4 characters'
        } else if (value.password > 10) {
            errors.password = 'Your password is more than 10 characters'
        }
        return errors;
        }
        return (
    
            <div className="container-form">
              {Object.keys(formErrors).length === 0 && isSubmit ? 
              <div className='signin-success'>Signed up successfully</div> : ''}
              <form onSubmit = {handleSubmit}>
                <h2>Signup</h2>
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
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formValues.email}
                      onChange = {handleChange}
                    />
                  <p className='form-p'>{formErrors.email}</p>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className='password_container'>
                    <input
                      type={visible}
                      name="password"
                      className='password_input'
                      placeholder="Password"
                      value={formValues.password}
                      onChange = {handleChange}
                      />
                    <FontAwesomeIcon icon={icon} className='eye' onClick={handleToggle}></FontAwesomeIcon>
                      </div>
                    <p className='form-p'>{formErrors.comfirmPassword}</p>
                  </div>
                  <div className="field">
                    <label>Comfirm password</label>
                    <div className='password_container'>
                    <input
                      type={visible2}
                      name="comfirmPassword"
                      className='password_input'
                      placeholder="Comfirm password"
                      value={formValues.comfirmPassword}
                      onChange = {handleChange}
                      />
                    <FontAwesomeIcon icon={icon2} className='eye' onClick={handleToggle2}></FontAwesomeIcon>
                      </div>
                    <p className='form-p'>{formErrors.comfirmPassword}</p>
                  </div>
                  <button className="submit-btn">Sign up</button>
                </div>
              </form>
            </div>
          );
    }
  

export default Signup