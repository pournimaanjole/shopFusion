import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

import './Login.css'
const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const login = async () => {
    const response = await axios.post('/login', {
      email: email,
      password: password
    })
    alert(response?.data?.message)
    if (response?.data?.success) {
      localStorage.setItem('login', JSON.stringify(response?.data?.data))
      window.location.href = '/'
    }
  }

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('login' || '{}'))
    if(user?.email) {
      alert('you are already loged in ')
    window.location.href='/'
    }
  },[])
  return (
    <div>

      <Navbar />

      <div className='loginsignup'>
        <div className='loginsinup-container login-container'>
          <h1>login</h1>
          <div className='loginsingup-fields'>
            <input type='email'
              value={email}
              placeholder='enter your email'
              onChange={(e) => {
                setemail(e.target.value)

              }}
              className='inputfields'
            />

            <input type='password'
              value={password}
              placeholder='enter your password'
              onChange={(e) => {
                setpassword(e.target.value)

              }}
              className='inputfields'
            />
            <button type='button' onClick={login}>login</button>

            <p className='loginsignup-login'>Don't have an account? <span className='loginsingup-login-span'><Link to='/signup' className='loginsignup-link'>Signup</Link>
            </span></p>
          </div>


        </div>
      </div>

     
      {/* <div>
        <form>

          <div>
            <label htmlFor='email'>Email</label>
            <input type='email'
              value={email}
              placeholder='enter your email'
              onChange={(e) => {
                setemail(e.target.value)

              }}
              id='email' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='password'
              value={password}
              placeholder='enter your password'
              onChange={(e) => {
                setpassword(e.target.value)

              }}
              id='password' />
          </div>

         
        </form>
      </div> */}
    </div>
  )
}

export default Login
