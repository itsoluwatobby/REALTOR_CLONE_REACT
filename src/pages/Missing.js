import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='flex flex-col py-[50%] lg:py-[10%] justify-center items-center'>
      <div className='bg-red-200 shadow-2xl rounded py-10 flex flex-col justify-between items-center w-[60%] sm:w-[40%] space-x-4'>
         <h1 className='text-4xl text-red-400 flex-1 mb-8'>Page Not Found</h1>
         <Link to='/' className='text-blue-500 text-2xl underline'>Return To Home Page</Link>
      </div>
    </div>
  );
}

export default Missing;
