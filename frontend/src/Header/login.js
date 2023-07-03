import React, { useState,useEffect } from 'react'
import img1 from '../signupImage/name.png'
import img2 from '../signupImage/email.png'
import img7 from '../signupImage/signup.png'
import { useNavigate } from 'react-router-dom'
const Login = () => {

     const navigate=useNavigate();
     const [user,setUser]=useState({email:"",password:""});
     
     useEffect(()=>{

     },[user]);

      // when user will login then data will render here in user
     console.log(user);
     const handleinput= async (e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
     }

     const loginuser=async (e)=>{
      e.preventDefault();
      const {email,password}=user;
      //  we are sending the data from frontend to backend using the fetch API but this is not a good practice instead of this please use axios
      //  sending the login data to the backend

      const res=await fetch("/signin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,password
        })
      })
      const data=await res.text();
      console.log(data);
      
      if(res.status===400||!data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }else{
        window.alert("Registration Successful");
        console.log("Registration Successful");
        navigate('/');
      }
    }

  return (
    <>
      <div className=' flex flex-col items-center justify-center h-screen bg-emerald-300'>

        <div className=' text-3xl font-bold'>
          Log In
        </div>

        <div className=' my-4 flex'>
          <form method="POST" className='flex flex-col  justify-evenly gap-5'>
            <div className=' flex'>
              <img className=" w-9 mr-2" src={img1} alt="not found" />
              <input className="rounded-xl" type="text" name="email" placeholder="Enter Email" autoComplete='off' value={user.email} onChange={handleinput}/>
            </div>
            <div className=' flex'>
              <img className=" w-9 mr-2" src={img2} alt="not found" />
              <input className="rounded-xl" type="text" name="password" placeholder="Enter Password" autoComplete='off' value={user.password} onChange={handleinput}/>
            </div>
          </form>
          <div className=' ml-4'>
            <img className="w-40" src={img7} alt="not found" />
          </div>
        </div>

        <button className=' bg-blue-400 p-2 text-white font-bold rounded-xl' onClick={loginuser}>
          Register
        </button>
      </div>
    </>
  )
}

export default Login