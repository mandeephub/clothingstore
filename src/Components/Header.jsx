import React from 'react'
import logo from '../assets/logo.svg'

import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';








const Header = () => {
  return (
    <>
    
    
      <div className='header-bar'>
<div className='container'>

          <div className='outer-div'>

            <div className='logo'>
              <img src={logo}/>
            </div>


            <div className='inner-div'>
              <div className='menu top'>
                <ul>
                  <Link to="/">Sign In / Join AJIO</Link>
                  <Link to ="/products">Customer Care</Link>
                  <Link to="/ajioluxe">Visit AJIOLUXE</Link>
                </ul>
              </div>

              <div className='menu bottom'>
               <ul>
                
                <Link>KIDS</Link>
                <Link>BEAUTY</Link>
                <Link>HOME AND KITCHEN</Link>
               </ul>


               <form>
                <input type='text'/>
               </form>


               <div className='header-icons'>
                <div>
                <FaHeart />
                </div>

                <div>
                <FaCartShopping />
                </div>
               </div>
              </div>
            </div>
          </div>

          </div>

      </div>
    
    </>
  )
}

export default Header