import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

const ForgotPassword = () => {
   const [email, setEmail] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()

      try{
         const auth = getAuth()
         await sendPasswordResetEmail(auth, email);
         toast.success('Email was sent')

         setEmail('');
      }
      catch(err){
         toast.error(`Could not send reset password`)
      }
   }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto'>
         <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="pics" className='w-full rounded-2xl' />
         </div>
         <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form onSubmit={handleSubmit}>
               <div className='relative mb-6'>
                  <input 
                     className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                     type='email'
                     name='email' 
                     placeholder='Enter Email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>
               <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                  <p className='mb-6'>Don't have an account?  
                     <Link to='/sign-up' className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'>Register</Link>
                  </p>
                  <p>
                     <Link to='/sign-in' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Sign in</Link>
                  </p>
               </div>
               <button 
               className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800' type="submit"
               onClick={handleSubmit}
               >Send Reset Password</button>
               <div className='my-4 flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                  <p className='text-center font-semibold mx-4'>OR</p>
               </div>
               <OAuth />
            </form>
         </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
