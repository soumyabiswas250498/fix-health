import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [section, setSection] = useState('');

    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }

        }
    }, [section])

    return (
        <div className='flex items-center justify-between w-full px-2 bg-[#092635] text-yellow-50'>
            <img src="/assets/img/logo.svg" alt="logo" className='h-12 py-1' />
            <div className='flex items-center w-auto gap-3'>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('hero-section')}>Home</p>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('testimonials-section')}>Testimonials</p>
                <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('book-section')}>Book Now</p>
            </div>
        </div>
    )
}
