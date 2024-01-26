import React from 'react'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>

        
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-[1.1] duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={img1} alt="single worker" />

                <h2 className='text-2xl font-bold text-center py-8'>
                    Single User
                </h2>

                <p className='text-center text-4xl font-bold'>LKR 20,000</p>

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>




            <div className='bg-gray-100 w-full shadow-xl flex flex-col md:my-0 p-4 my-8 rounded-lg hover:scale-[1.1] duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={img2} alt="single worker" />

                <h2 className='text-2xl font-bold text-center py-8'>
                    Partnership
                </h2>

                <p className='text-center text-4xl font-bold'>LKR 25,000</p>

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
                </div>

                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 bg-black'>Start Trial</button>

            </div>



            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-[1.1] duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={img3} alt="single worker" />

                <h2 className='text-2xl font-bold text-center py-8'>
                    Group Account
                </h2>

                <p className='text-center text-4xl font-bold'>LKR 35,000</p>

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 5 TB Storage</p>
                    <p className='py-2 border-b mx-8 '>15 Users Allowed</p>
                    <p className='py-2 border-b mx-8 '>Send up to 25 GB</p>
                </div>

                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>
            

          

        


        </div>
      
    </div>
  )
}

export default Cards
