import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='sidenav' >
        <NavLink to='#' className='menubar'>
          <FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='link' onClick={showSidebar}>
          <li>
            <NavLink to='#'>
              <AiOutlineClose />
            </NavLink>
          </li>
          <li className='text'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='text'>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className='text'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideNav