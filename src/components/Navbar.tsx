import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useOutsideClick from '../Hooks/useOutsideClick';

export default function Navbar() {
    const [section, setSection] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    // const ref = useOutsideClick(() => { setShowMenu((prev) => !prev); console.log('test') });

    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [section])

    return (
        <div className='pb-12'>
            <div className='fixed flex items-center justify-between w-full px-2 backdrop-blur-md bg-[#092635a6] text-yellow-50 z-30' >
                <img src="/assets/img/logo.svg" alt="logo" className='h-16 py-1' />
                <div className='items-center hidden w-auto gap-3 md:flex'>
                    <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('hero-section')}>Home</p>
                    <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('testimonials-section')}>Testimonials</p>
                    <p className='px-4 py-2 rounded-md cursor-pointer bg-[#1B4242]  hover:bg-[#5C8374]' onClick={() => setSection('book-section')}>Book Now</p>
                </div>
                <div className='pr-3 md:hidden'>
                    {showMenu ? <RxCross2 size={32} onClick={() => setShowMenu(false)} /> : <GiHamburgerMenu size={32} onClick={() => setShowMenu(true)} />}
                </div>
                {showMenu && <div className='absolute flex flex-col justify-center items-center gap-2 top-[62px] h-[30vh] w-[98vw] backdrop-blur-2xl bg-[#3b8d8d75] '>
                    <p className='px-4 w-32 flex justify-center items-center py-2 rounded-md cursor-pointer bg-[#103838f5]' onClick={() => { setSection('hero-section'); setShowMenu(false) }}>Home</p>
                    <p className='px-4 w-32 flex justify-center items-center py-2 rounded-md cursor-pointer bg-[#103838e8]' onClick={() => { setSection('testimonials-section'); setShowMenu(false) }}>Testimonials</p>
                    <p className='px-4 w-32 flex justify-center items-center py-2 rounded-md cursor-pointer bg-[#103838ec]' onClick={() => { setSection('book-section'); setShowMenu(false) }}>Book Now</p>

                </div>}
            </div>

        </div>
    )
}
