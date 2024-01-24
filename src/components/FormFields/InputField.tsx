import React, { ChangeEvent, FocusEvent } from 'react'

interface Ipops {
    label: string;
    type: 'text' | 'number' | 'password';
    error?: string;
    placeHolder: string;
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
    touched: boolean | undefined;
    value: string;
}

export default function InputField(props: Ipops) {
    const { label, type, error, placeHolder, name, handleChange, handleBlur, touched, value } = props;
    return (
        <div className='w-full my-2 md:w-1/2'>
            <p className='pb-2 text-white'>{label}</p>
            <input
                type={type}
                className='bg-[#5C8374] w-full rounded-md outline-[#9EC8B9] text-white px-4 py-2'
                placeholder={placeHolder}
                name={name}
                id={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />
            <p className='h-4 text-sm text-red-400'>{(error && touched) && error}</p>
        </div>
    )
}
