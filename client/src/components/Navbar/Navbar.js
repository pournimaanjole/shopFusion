import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from './navimg/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import hello from './navimg/hello.png';


const Navbar = () => {
  const [user, setuser] = useState({})
  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("login") || "{}")
    setuser(userdata);
  }, [])

  const [active, setactive] = useState('shop')
  return (
    <div>

      {/* navbar  */}

      <div className='navbar'>
        <div className='navlogo'>
          <img src={logo} />
          <p>shopfusion</p>

        </div>
        <ul className='navlist'>
          <li onClick={() => {
            setactive("shop")
          }} ><Link to='/' style={{ textDecoration: "none" }}>shop </Link>  {active === 'shop' ? <hr /> : <></>}</li>

          <li onClick={() => {
            setactive("women")
          }} > <Link to='/women' style={{ textDecoration: "none" }}>women </Link> {active === 'women' ? <hr /> : <></>}</li>

          <li onClick={() => {
            setactive("men")
          }} ><Link to='/men' style={{ textDecoration: 'none' }}>men</Link>{active === 'men' ? <hr /> : <></>}</li>

          <li onClick={() => {
            setactive("kids")
          }}><Link to='/kids' style={{ textDecoration: "none" }}>kids</Link> {active === 'kids' ? <hr /> : <> </>}</li>
        </ul>
        <div className='login-add-tocard'>
          <Link to='/signup'> <button type='button'>signup</button></Link>
          <Link to='/login'>  <button type='button'>login</button></Link>

          <div> <Link to='/order'>   <FontAwesomeIcon icon={faCartShopping} className='cart' /></Link> </div>

          <div className='nav-cart-cout'>0</div>

          <div className='user'>
            <img src={hello} className='helloimg' />
            <div><span className='username'> {user.name || 'user'}</span>

{
          user?.name ? (<span onClick={() => {
            localStorage.removeItem('login')

            window.location.href('/login')
          }} className='logout'>logout</span>)
            : null
        }

           
             </div>


          </div>

        </div>
      </div>

    
    </div>
  )
}

export default Navbar
