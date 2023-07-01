import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../signupImage/logo.png'
const header = () => {
  return (
    <>
      <div className='flex justify-between bg-slate-400'>
        <NavLink><img  className="h-16 " src={logo} alt="not found" /></NavLink>
        <div className='flex justify-end gap-6 text-teal-50 mt-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/aboutme'>AboutMe</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
      </div>
    </>
  )
}

export default header