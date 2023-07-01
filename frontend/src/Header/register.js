import React from 'react'
import img1 from '../signupImage/name.png'
import img2 from '../signupImage/email.png'
import img3 from '../signupImage/work.png'
import img4 from '../signupImage/phone.png'
import img5 from '../signupImage/password.png'
import img6 from '../signupImage/cpassword.png'
import img7 from '../signupImage/signup.png'


const register = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center h-screen bg-emerald-300'>

        <div className=' text-3xl font-bold'>
          Sign up
        </div>

        <div className=' my-4 flex'>
           <form className='flex flex-col gap-5'>
             <div className=' flex'>
               <img className=" w-9 mr-2" src={img1} alt="not found" /> 
               <input className="rounded-xl" type="text" name="name" placeholder="Enter Name" autoComplete='off'/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img2} alt="not found" />
                <input className="rounded-xl" type="text" name="email" placeholder="Enter Email" autoComplete='off'/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img3} alt="not found" />
                <input className="rounded-xl" type="text" name="work" placeholder="Enter work" autoComplete='off'/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img4} alt="not found" />
                < input className="rounded-xl" type="text" name="phone" placeholder="Enter Phone No." autoComplete='off'/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img5} alt="not found" />
                <input className="rounded-xl" type="text" name="password" placeholder="Enter Password" autoComplete='off'/>
             </div>
             <div className=' flex'>
                <img  className="w-9 mr-2"src={img6} alt="not found" />
                <input className="rounded-xl" type='text' name="cpassword"  placeholder="Enter Confirm Password" autoComplete='off'/>
             </div>
           </form>
           <div>
            <img className="w-56" src={img7} alt="not found"/>
           </div>
        </div>

        <button className=' bg-blue-400 p-2 text-white font-bold rounded-xl'>
          Register
        </button>
      </div>
    </>
  )
}

export default register