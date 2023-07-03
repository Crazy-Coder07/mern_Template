import React ,{useEffect} from 'react'
import profile from '../signupImage/profile.jpg'
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
const Aboutme = () => {
   
  const [userData,setuserData]=useState({});
  const Navigate=useNavigate();

   const callAboutPage= async ()=>{
     try{
        const res= await fetch('/about',{
         method:"GET",
         headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
         },
         credentials:"include"
        });
        const data=await res.json();
        console.log(data);
        setuserData(data);
        if(!res.status===200){
            const error=new Error(res.error)
            throw error;
        }
     }catch(err){
      console.log(err);
      Navigate('/login');
     }
   }

   useEffect(()=>{
      callAboutPage()
   },[])

  return (
    <>
      <div className='flex flex-col items-center h-screen justify-center bg-zinc-300'>
        <div className='bg-white shadow-2xl rounded-2xl p-24'>
          <div className='flex justify-center gap-8 mb-5'>
            <img className=" w-24" src={profile} alt="not found" />
            <div className='flex flex-col'>
              <div className=' font-bold'>{userData.name}</div>
              <div className=' text-blue-600'>{userData.work}</div>
              <div>RANKINGS:<p className=' font-bold'>1/10</p></div>
            </div>
            <button className='mt-8 rounded-md bg-lime-500 h-10'>Edit Profile</button>
          </div>
          <div className='flex justify-center gap-8'>
            <div className='flex flex-col'>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Linkedin</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">YouTube</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Web Developer</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Software Developer</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Mobile App Developer</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Adventure Life</a></div>
              <div><a className=" text-sky-500" href="https://www.youtube.com/channel/UCWVENExU4NZoKg4UaJ99gXA">Engineers</a></div>
            </div>
            <form method='GET'>
              <div className='font-bold '>About</div>
              <div className='flex justify-center space-x-5'>
                <div className='flex flex-col'>
                  <p>User Id</p>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Phone</p>
                  <p>Profession</p>
                </div>
                <div className='flex flex-col'>
                  <p>23432465347567</p>
                  <p>{userData.name}</p>
                  <p>{userData.email}</p>
                  <p>{userData.phone}</p>
                  <p>{userData.work}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme;