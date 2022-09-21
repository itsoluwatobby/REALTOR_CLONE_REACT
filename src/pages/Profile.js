import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import useOfStatus from '../hooks/useOfStatus';

const Profile = () => {
   const auth = getAuth();
   const { handleLogout } = useOfStatus()
   const [formData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email
   })

   const handleSubmit = async (e) => {
      e.preventDefault()
   }

   const handleChange = (e) => {
      const name = e.target.id
      const value = e.target.value

      setFormData(prevData => ({...prevData, [name]: value }));
   }
  
  return (
   <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
         <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
         <div className='w-full md:w-[50%] mt-6 px-3'>
            <form onSubmit={handleSubmit}>
               <input 
                  className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6'
                  type="text" 
                  id="name"
                  value={formData.name}
                  disabled={''}
                  onChange={handleChange}   
               />
               <input 
                  className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
                  type="email" 
                  id="email"
                  value={formData.email}
                  disabled={''}
                  onChange={handleChange}   
               />
               <div className='flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg'>
                  <p className='flex items-center'>Do you want to change your name? <span className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span></p>
                  <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer' onClick={handleLogout}>Sign out</p>
               </div>
               <button></button>
            </form>
         </div>
      </section>
   </>   
   );
}

export default Profile;

