import React from 'react'
import laptop from '../assets/lap.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="Laptop Image" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                Managing data analytics centrally involves the centralized control, organization, and coordination of data analytics processes and resources within an organization. This approach is designed to streamline and optimize the use of data to derive meaningful insights, make informed decisions, and drive overall business success.
                </p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black'>Get Started</button>
            </div>
            
        </div>

    </div>

  )
}

export default Analytics
