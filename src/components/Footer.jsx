import React from 'react'

//import icons
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>

            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DataKit.</h1>
            <p className='py-4'>
                DataKit.com always try to provide best and flexible better user experience to customers and always protecting valuable data of users as well. So, We always trying to developing our performance and security levels in real time Application as mentioned.
            </p>

            <div className='flex justify-between md:w-[75%] my-6 '>

                <CiFacebook size={30} className='hover:scale-[1.1] duration-300 cursor-pointer' />
                <FaXTwitter size={30} className='hover:scale-[1.1] duration-300 cursor-pointer' />
                <CiYoutube  size={30} className='hover:scale-[1.1] duration-300 cursor-pointer' />
                <FaWhatsapp size={30} className='hover:scale-[1.1] duration-300 cursor-pointer' />
                <FaInstagram size={30} className='hover:scale-[1.1] duration-300 cursor-pointer' />

            </div>

        </div>

        <div className='lg:col-span-3 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Analytics</li>
                    <li className='py-2 text-sm cursor-pointer'>Marketing</li>
                    <li className='py-2 text-sm cursor-pointer'>Commerce</li>
                    <li className='py-2 text-sm cursor-pointer' cursor-pointer>Insights</li>
                </ul> cursor-pointer
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Price</li>
                    <li className='py-2 text-sm cursor-pointer'>Documentation</li>
                    <li className='py-2 text-sm cursor-pointer'>Guides</li>
                    <li className='py-2 text-sm cursor-pointer'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>About</li>
                    <li className='py-2 text-sm cursor-pointer'>Blog</li>
                    <li className='py-2 text-sm cursor-pointer'>Jobs</li>
                    <li className='py-2 text-sm cursor-pointer'>Carrers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm cursor-pointer'>Claim</li>
                    <li className='py-2 text-sm cursor-pointer'>Policy</li>
                    <li className='py-2 text-sm cursor-pointer'>Terms</li>
                    
                </ul>
            </div>

            
        </div>
        <div className='justify-center '>
            <p className='text-sm  w-full flex justify-center py-4 text-bold items-center md:ml-[450px] md:text-[14px] text-red-300'>
             © Sandaruwan Warnasooriya - 2024
            </p>
        </div>
      
    </div>
  )
}

export default Footer
