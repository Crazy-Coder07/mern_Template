import React,{useEffect,useState} from 'react'
import img1 from '../signupImage/phone_lg.png'
import img2 from '../signupImage/mail.png'
import img3 from '../signupImage/Address.png'


const Contact = () => {

  const [userData,setuserData]=useState({});

   const callAboutPage= async ()=>{
     try{
        const res= await fetch('/contact',{
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
     }
   }

   useEffect(()=>{
      callAboutPage()
   },[])

  return (
    <>
      <div className=' flex flex-col justify-center gap-5 bg-zinc-300'>
        <div className=' flex justify-evenly mt-6'>
          <div className=' flex bg-white shadow-2xl rounded-2xl p-4'>
            <img className=" w-12 h-12" src={img1} alt="not found" />
            <div>
              <div className='font-bold'>Phone</div>
              <div>+1234567890</div>
            </div>
          </div>
          <div className=' flex bg-white shadow-2xl rounded-2xl p-4'>
            <img  className="w-12 h-12" src={img2} alt="not found" />
            <div>
              <div className='font-bold'>Email</div>
              <div>support@aditya.com</div>
            </div>
          </div>
          <div className=' flex bg-white shadow-2xl rounded-2xl p-4'>
            <img className="w-12 h-12" src={img3} alt="not found" />
            <div>
              <div className='font-bold'>Address</div>
              <div>patna,Bihar</div>
            </div>
          </div>
        </div>
        <form className='flex flex-col gap-5'>
          <div className='font-bold mx-auto'>Get In Touch</div>
          <div className=' flex justify-evenly'>
            <input className="rounded-xl p-4" type="text" placeholder='Your Name' value={userData.name} />
            <input className="rounded-xl p-4" type="text" placeholder='Your Email' value={userData.email} />
            <input className="rounded-xl p-4" type="text" placeholder='Your Phone' value={userData.phone}/>
          </div>
          <textarea  type="text" placeholder='Your Message'></textarea>
          <button className=' bg-blue-600 mx-auto rounded-xl mb-6 p-4'>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact;