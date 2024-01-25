import React, { useEffect, useState } from 'react';
import Form from './Form';


export default function BookNow() {
    const [showForm, setShowForm] = useState(false);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (submit) {
            setTimeout(() => { setSubmit(false) }, 4000)
        }
    }, [submit])

    // console.log(submit)

    return (
        <div className='w-full px-2 md:mt-16' id='book-section'>
            <div className='relative flex justify-center w-full'>
                {!showForm && <button className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none' onClick={() => setShowForm(true)} >Book Now</button>}
                {submit && <div className='absolute bottom-0 right-0 flex items-center justify-center h-12 px-5 border border-green-500 rounded-md w-fit bg-[#9EC8B9]'>
                    <h1 className='text-[#145242] font-bold'>
                        Your booking is successfull we will contact soon.
                    </h1>

                </div>}

            </div>
            <div className='flex justify-center w-full'>
                {showForm && <h1 className='py-4 text-2xl text-white'>Book Your Appointment</h1>}
            </div>
            <div>
                {showForm && <Form setShowForm={setShowForm} setSubmit={setSubmit} />}
            </div>
        </div>
    )
}
