import React, { ChangeEvent, FocusEvent } from 'react'

interface Iprops {
    label: string;
    options: {
        value: string;
        label: string
    }[];
    error: string | undefined;
    name: string;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleBlur: (event: FocusEvent<HTMLSelectElement>) => void;
    touched: boolean | undefined;
    value: string;
}

export default function DropDown(props: Iprops) {
    const { label, options, error, name, handleChange, handleBlur, touched, value } = props;
    return (
        <div className='flex flex-col w-full my-2 md:w-1/2'>
            <label htmlFor="cars" className='pb-2 text-white'>{label}</label>
            <select
                name={name}
                id={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                className='bg-[#5C8374] outline-[#9EC8B9] rounded-md text-white px-2 py-2'
            >
                {options.map((item: any) => <option key={item.value} value={item.value} className=''>{item.label}</option>)}
            </select>
            <p className='h-4 text-sm text-red-400'>{(error && touched) && error}</p>
        </div>
    )
}
