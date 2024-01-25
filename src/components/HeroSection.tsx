import React from 'react'

export default function HeroSection() {
    const handleScroll = () => {
        const element = document.getElementById('book-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className='relative h-[60vh] w-full py-2 mb-8 px-2' id='hero-section'>
            <img src="/assets/img/hero-image.jpg" alt="heroImage" className='object-cover w-full h-full rounded-md' />
            <div className='absolute top-0 flex flex-col items-center justify-center w-[98vw] h-full gap-3 '>
                <h1 className='text-2xl md:text-4xl font-bold text-[#316c70]'>Your Physiotherapy Destination</h1>
                <button className='px-4 h-10 md:h-14 flex justify-center items-center text-2xl md:text-3xl font-bold text-white bg-[#152F31] hover:bg-[#316c70] rounded-md' onClick={() => { handleScroll() }}>
                    Start Here
                </button>
            </div>
        </div>
    )
}
