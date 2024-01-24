import React, { useState } from 'react';
import Form from './Form';

export default function BookNow() {
    const [showForm, setShowForm] = useState(false)
    return (
        <div className='w-full px-2 md:mt-16' id='book-section'>
            <div className='flex justify-center w-full'>
                {!showForm && <button className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none' onClick={() => setShowForm(true)} >Book Now</button>}
            </div>
            <div className='flex justify-center w-full'>
                {showForm && <h1 className='py-4 text-2xl text-white'>Book Your Appointment</h1>}
            </div>
            <div>
                {showForm && <Form setShowForm={setShowForm} />}
            </div>
        </div>
    )
}
