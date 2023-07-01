import React from 'react'
import img1 from '../signupImage/name.png'
import img2 from '../signupImage/email.png'
import img7 from '../signupImage/signup.png'

const login = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center h-screen bg-emerald-300'>

        <div className=' text-3xl font-bold'>
          Log In
        </div>

        <div className=' my-4 flex'>
          <form className='flex flex-col  justify-evenly gap-5'>
            <div className=' flex'>
              <img className=" w-9 mr-2" src={img1} alt="not found" />
              <input className="rounded-xl" type="text" name="name" placeholder="Enter Name" autoComplete='off' />
            </div>
            <div className=' flex'>
              <img className=" w-9 mr-2" src={img2} alt="not found" />
              <input className="rounded-xl" type="text" name="email" placeholder="Enter Email" autoComplete='off' />
            </div>
          </form>
          <div className=' ml-4'>
            <img className="w-40" src={img7} alt="not found" />
          </div>
        </div>

        <button className=' bg-blue-400 p-2 text-white font-bold rounded-xl'>
          Register
        </button>
      </div>
    </>
  )
}

export default login