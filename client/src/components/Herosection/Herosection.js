import React from 'react'
import './Herosection.css'
import heroimg from './hello.png'
import heroimg2 from './hero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Herosection = () => {
    return (
        <div>
            <div className='herosection'>
                <div className='leftdiv'>
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div  className='new-hand'>
                        <p>NEW</p>
                        <img src={heroimg } className='heroimg' />
                    </div>
                    <p>collections</p>
                    <p>for everyone </p>
                    <button type='button' className='latest-btn'>Latest collection <FontAwesomeIcon icon={faArrowRight} className='arrow' /></button>
                </div>
                <div className='rightdiv'>
<img src={heroimg2}/>
                </div>
            </div>
        </div>
    )
}

export default Herosection
