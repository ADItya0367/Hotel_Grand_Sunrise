import React from 'react'
import { FacebookFilled, InstagramFilled, InstagramOutlined, LinkedinFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
       <div>
        <ul className='ull'>
          <li><Link to='./about'>About Us</Link></li>
          <li>|</li>
          <li><Link to='./about'>Partner</Link></li>
          <li>|</li>
          <li><Link to='./about'>Our Team</Link></li>
          <li>|</li>
          <li><Link to='./about'>Career</Link></li>
          <li>|</li>
          <li><Link to='./about'>Feedback</Link></li>
        </ul>
       </div>
       <div className='icons'>
        <div className='icon'>
        <InstagramFilled className='ico'/>
        <FacebookFilled className='ico'/>
        <LinkedinFilled className='ico'/>
        </div>
        <div>
         <input placeholder='Subscribe to Newsteller' className='news'/>
         <button className='btnn'>Subscribe</button>
        </div>
        
       </div>
       <div>
       <p className='copyright'>Copyright©2024, Grand Sunrise. All Rights Reserved. Powered By Internet Moguls</p>
       </div>
       
    </div>
  )
}

export default Footer
