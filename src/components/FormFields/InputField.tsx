import React from 'react'

interface Ipops {
    label: string;
    type: 'text' | 'number' | 'password';
    error?: string;
    placeHolder: string
}

export default function InputField(props: Ipops) {
    const { label, type, error, placeHolder } = props;
    return (
        <div className='w-full my-2 md:w-1/2'>
            <p className='pb-2 text-white'>{label}</p>
            <input type={type} className='bg-[#5C8374] w-full rounded-md outline-[#9EC8B9] text-white px-4 py-2' placeholder={placeHolder} />
            <p className='h-4 text-sm text-red-400'>{error}</p>
        </div>
    )
}
