import React, { ChangeEvent, FocusEvent } from 'react';

interface Iprops {
    label: string;
    name: string;
    error: string | undefined
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    handleBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
    touched: boolean | undefined;
    value: string;
}

export default function TextArea(props: Iprops) {
    const { label, error, name, handleChange, handleBlur, touched, value } = props;
    return (
        <div className='flex flex-col w-full my-2'>
            <label htmlFor="textArea" className='pb-2 text-white'>{label}</label>

            <textarea
                id={name}
                name={name}
                rows={4} cols={50}
                className='bg-[#5C8374] w-full rounded-md outline-[#9EC8B9] text-white px-4 py-2'
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            >
            </textarea>
            <p className='h-4 text-sm text-red-400'>{(error && touched) && error}</p>
        </div>
    )
}
