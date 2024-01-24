import React, { useState } from 'react';
import Form from './Form';

export default function BookNow() {
    const [showForm, setShowForm] = useState(false)
    return (
        <div className='w-full px-2 mt-4'>
            <div className='flex justify-center w-full'>
                <h1 className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none'>Book Now</h1>
            </div>
            <div>
                <Form />
            </div>
        </div>
    )
}
