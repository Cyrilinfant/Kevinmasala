import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
             <div className="footer-content-left">
                <img className='logo'src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae nesciunt amet vero animi quaerat, suscipit voluptas ipsam corrupti soluta itaque maxime ipsum velit tempore ratione ad assumenda magnam eos.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
             </div>
             <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>
             <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 856 7895 789</li>
                    <li>kevinmasla@gamil.com</li>
                </ul>

             </div>
             
        </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © kevinmasala.com -All Right Reserved. </p>
    </div>
  )
}

export default Footer
