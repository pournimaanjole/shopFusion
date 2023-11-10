import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'


const Signup = () => {


    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [password, setpassword] = useState('')
    const [address, setaddress] = useState('')
    const [gender, setgender] = useState('female')

    const sign = async () => {
        if (!name) {
            alert("name is required")
            return
        }
        if (!email) {
            alert("email is required")
            return
        }
        if (!mobile) {
            alert("mobile is required")
            return
        }
        if (!password) {
            alert("passwordd is required")
            return
        }
        if (!address) {
            alert("address is required")
            return
        }

        const response = await axios.post('/users', {
            name: name,
            email: email,
            mobile: mobile,
            password: password,
            address: address,
            gender: gender
        })

        alert(response?.data?.message)
        if (response?.data?.success) {
            window.location.href = '/login'
        }
        setname('')
        setemail('')
        setaddress('')
        setmobile('')


    }



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('login' || '{}'))
        if (user?.email) {
            alert('you are already loged in ')
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <Navbar />

            <div className='loginsignup '>
                <div className='loginsinup-container'>
                    <h1>Signup</h1>
                    <div className='loginsingup-fields'>
                        <input type='text'
                            value={name}
                            placeholder='enter your name'
                            onChange={(e) => {
                                setname(e.target.value)

                            }}
                            className='inputfields'
                        />
                        <input type='email'
                            value={email}
                            placeholder='enter your email'
                            onChange={(e) => {
                                setemail(e.target.value)

                            }}
                            className='inputfields'
                        />

                        <input type='text'
                            value={mobile}
                            placeholder='enter your mobile'
                            onChange={(e) => {
                                setmobile(e.target.value)

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

                        <input type='text'
                            value={address}
                            placeholder='enter your address'
                            onChange={(e) => {
                                setaddress(e.target.value)

                            }}
                            className='inputfields'
                        />

                        <div>
                            <input type='radio'
                                name='gender'
                                id='male'
                                checked={gender === 'male'}
                                onClick={() => {
                                    setgender("male")
                                }} 
                                className='radio'
                                />
                            <label htmlFor='male'>Male</label>

                            <input type='radio'
                                name='gender'
                                id='female'
                                checked=
                                {gender === 'female'}
                                onClick={() => {
                                    setgender("female")
                                }} 
                                className='radio'
                                />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <button type='button' onClick={sign} >signup</button>
<p className='loginsignup-login'>already have an account? <span className='loginsingup-login-span'><Link to='/login' className='loginsignup-link'>login</Link>
   </span></p>
                    </div>
                </div>
            </div>



           

            <div>
                <form>
                    {/* name input box */}
                    {/* <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text'
                            value={name}
                            placeholder='enter your name'
                            onChange={(e) => {
                                setname(e.target.value)

                            }}
                            id='name' />
                    </div> */}
                    {/* name input box */}


                    {/* email input box */}
                    {/* <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                            value={email}
                            placeholder='enter your email'
                            onChange={(e) => {
                                setemail(e.target.value)

                            }}
                            id='email' />
                    </div> */}
                    {/* email input box */}

                    {/* mobile input box */}
                    {/* <div>
                        <label htmlFor='mobile'>Mobile</label>
                        <input type='text'
                            value={mobile}
                            placeholder='enter your mobile'
                            onChange={(e) => {
                                setmobile(e.target.value)

                            }}
                            id='mobile' />
                    </div> */}
                    {/* mobile input box */}

                    {/* password input box */}
                    {/* <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password'
                            value={password}
                            placeholder='enter your password'
                            onChange={(e) => {
                                setpassword(e.target.value)

                            }}
                            id='password' />
                    </div> */}
                    {/* password input box */}

                    {/* address input box */}
                    {/* <div>
                        <label htmlFor='address'>Address</label>
                        <input type='text'
                            value={address}
                            placeholder='enter your address'
                            onChange={(e) => {
                                setaddress(e.target.value)

                            }}
                            id='address' />
                    </div> */}
                    {/* address input box */}

                    {/* gender input box */}
                    {/* <div>
                        <input type='radio' name='gender' id='male' checked={gender === 'male'} onClick={() => {
                            setgender("male")
                        }} />
                        <label htmlFor='male'>Male</label>

                        <input type='radio' name='gender' id='female' checked=
                            {gender === 'female'} onClick={() => {
                                setgender("female")
                            }} />
                        <label htmlFor='female'>Female</label>
                    </div> */}
                    {/* gender input box */}
                </form>

                {/* <button type='button' onClick={sign} >signup</button> */}

                {/* <Link to='/login'>already have an account</Link> */}

            </div>
        </div>
    )
}

export default Signup
