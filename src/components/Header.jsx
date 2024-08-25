import React from 'react';
import logoo from '../mainn.png';
import {Link} from 'react-router-dom';
import about from '../pages/AboutUs';
import contact from '../pages/ContactUs';
import celebrations from '../pages/Celebrations';
import destination from '../pages/Destination';


 const Header = ()=>{
    return (
        <header className='header'>
            <div className='head-nav'>
                <div >
                <img className='logo' src={logoo} alt='logo'/>
                </div>
                <div>
                    <ul className='nav-items'>
                        <li className='navs'>Home</li>
                        <li  className='navs'><Link to='./about'>About Us</Link></li>
                        <li  className='navs'><Link to='contact'>Contact Us</Link></li>
                        <li  className='navs'><Link to='celebrations'>Celebrations</Link></li>
                        <li  className='navs'><Link to='destinations'>Destinations</Link></li>

                    </ul>
                </div>
            </div>
        </header>
    )
 }

 export default Header;