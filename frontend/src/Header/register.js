import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import img1 from '../signupImage/name.png'
import img2 from '../signupImage/email.png'
import img3 from '../signupImage/work.png'
import img4 from '../signupImage/phone.png'
import img5 from '../signupImage/password.png'
import img6 from '../signupImage/cpassword.png'
import img7 from '../signupImage/signup.png'



const Register = () => {

  const navigate = useNavigate();
  const [user,setUser]=useState({name:"",email:"",work:"",phone:"",password:"",cpassword:""});
  
  useEffect(() => {
  }, [user]);
  // now this user containning all the data of the signup form
  console.log(user);


  const handleinput= async (e)=>{
    const {name,value}=e.target;
     setUser({...user,[name]:value});
  }
  
  const submitform=async (e)=>{
    e.preventDefault();
    const {name,email,work,phone,password,cpassword}=user;
    //  we are sending the data from frontend to backend using the fetch API but this is not a good practice instead of this please use axios
    
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,work,phone,password,cpassword
      })
    })
    const data=await res.text();
    console.log(data);
    if(res.status===422||!data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate('/login');
    }
  }

  return (
    <>
      <div className=' flex flex-col items-center justify-center h-screen bg-emerald-300'>

        <div className=' text-3xl font-bold'>
          Sign up
        </div>

        <div className=' my-4 flex'>
           <form method='POST' className='flex flex-col gap-5'>
             <div className=' flex'>
               <img className=" w-9 mr-2" src={img1} alt="not found" /> 
               <input className="rounded-xl" type="text" name="name" placeholder="Enter Name" autoComplete='off' value={user.name} onChange={handleinput}/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img2} alt="not found" />
                <input className="rounded-xl" type="text" name="email" placeholder="Enter Email" autoComplete='off' value={user.email} onChange={handleinput}/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img3} alt="not found" />
                <input className="rounded-xl" type="text" name="work" placeholder="Enter work" autoComplete='off' value={user.work} onChange={handleinput}/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img4} alt="not found" />
                < input className="rounded-xl" type="text" name="phone" placeholder="Enter Phone No." autoComplete='off' value={user.phone} onChange={handleinput}/>
             </div>
             <div className=' flex'>
                <img className=" w-9 mr-2" src={img5} alt="not found" />
                <input className="rounded-xl" type="text" name="password" placeholder="Enter Password" autoComplete='off' value={user.password} onChange={handleinput}/>
             </div>
             <div className=' flex'>
                <img  className="w-9 mr-2"src={img6} alt="not found" />
                <input className="rounded-xl" type='text' name="cpassword"  placeholder="Enter Confirm Password" autoComplete='off' value={user.cpassword} onChange={handleinput}/>
             </div>
           </form>
           <div>
            <img className="w-56" src={img7} alt="not found"/>
           </div>
        </div>

        <button className=' bg-blue-400 p-2 text-white font-bold rounded-xl' onClick={submitform}>
          Register
        </button>
      </div>
    </>
  )
}

export default Register;