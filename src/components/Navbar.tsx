import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between w-full px-2 bg-[#092635] text-yellow-50'>
            <img src="/assets/img/logo.svg" alt="logo" className='h-12 py-1' />
            <div className='flex items-center w-auto gap-3'>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]'>Home</p>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]'>Testimonials</p>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]'>Book Now</p>
            </div>
        </div>
    )
}
