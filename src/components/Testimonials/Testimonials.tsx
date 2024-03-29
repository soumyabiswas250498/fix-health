import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import data from '../../data/Testimonials.json'
import Card from './Card';

export default function Testimonials() {
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;

        if (container) {
            if (direction === 'left') {
                container.scrollTo({
                    left: container.scrollLeft - 350,
                    behavior: 'smooth',
                });
            } else if (direction === 'right') {
                container.scrollTo({
                    left: container.scrollLeft + 350,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;

            if (container) {
                setShowLeftButton(container.scrollLeft > 0);
                setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftButton(container.scrollLeft > 0);
            setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);

            // Add scroll event listener
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            const container = scrollContainerRef.current;
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className='w-full px-2 my-8' id='testimonials-section'>
            <div className='flex justify-center w-full'>
                <h2 className='py-10 text-2xl text-white'>What Our Clients Say ?</h2>
            </div>
            <div className='relative w-full'>
                <div className='flex w-full gap-4 overflow-x-auto scrollbar-hide' ref={scrollContainerRef}>
                    {
                        data.map((item, index) => <Card item={item} key={index} />)
                    }
                </div>
                <div className='absolute top-[50%] flex justify-between items-center w-full'>
                    {showLeftButton ? <IoIosArrowDropleft style={{ color: "white", fontSize: '2rem' }} className='cursor-pointer select-none' onClick={() => handleScroll('left')} /> : <h1 className='cursor-pointer select-none'>&nbsp;</h1>}
                    {showRightButton ? <IoIosArrowDropright style={{ color: "white", fontSize: '2rem' }} className='cursor-pointer select-none' onClick={() => handleScroll('right')} /> : <h1 className='cursor-pointer select-none'>&nbsp;</h1>}
                </div>
            </div>


        </div>

    )
}
