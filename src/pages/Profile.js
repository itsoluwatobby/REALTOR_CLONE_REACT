import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react'
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../Firebase/Firebase';
import useOfStatus from '../hooks/useOfStatus';

const Profile = () => {
   const auth = getAuth();
   const { handleLogout } = useOfStatus()
   const [changeDetail, setChangeDetail] = useState(false)
   const [formData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email
   })

   const onSubmit = async () => {
      try{
         if(auth.currentUser.displayName !== formData.name){
            //update display name in firebase authentication
            await updateProfile(auth.currentUser, { 
               displayName: formData.name,
            });

            //update name in the firestore
            const docRef = doc(db, 'users', auth.currentUser.uid);
            await updateDoc(docRef, { 
               name: formData.name,
            });
         }
         toast.success('Profile details updated')
      }
      catch(err){
         toast.error('Could not update profile details')
      }
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
            <form>
               <input 
                  className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ${changeDetail && 'bg-red-200 focus:bg-red-200'}`}
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  disabled={!changeDetail}
                  onChange={handleChange}   
               />
               <input 
                  className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  disabled={!changeDetail}
                  onChange={handleChange}   
               />
               <div className='flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg'>
                  <p className='flex items-center'>Do you want to change your name? 
                  <span
                     onClick={() => {
                        changeDetail && onSubmit()
                        setChangeDetail(prevState => !prevState)
                     }}
                     className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer'>{changeDetail ? 'Apply change' : 'Edit'}</span></p>
                  <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer' onClick={handleLogout}>Sign out</p>
               </div>
               <button type='submit'></button>
            </form>
            <button type='submit' className='w-full bg-blue-600 text-white uppercase py-3 px-7 text-sm font-medium rounded shadow-md hover:bg-blue-700 active:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg'>
               <Link to='/create-listing' className='flex justify-center items-center'>
                  <FcHome className='mr-2 border-2 text-3xl bg-red-200 rounded-full p-1'/>
                  Sell or rent your home
               </Link>   
            </button>
         </div>
      </section>
   </>   
   );
}

export default Profile;

