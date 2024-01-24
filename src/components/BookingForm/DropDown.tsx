import React from 'react'

export default function DropDown(props: any) {
    const { label, options, error } = props;
    console.log(options)
    return (
        <div className='flex flex-col w-full my-2 md:w-1/2'>
            <label htmlFor="cars" className='pb-2 text-white'>{label}</label>
            <select name="cars" id="cars" className='bg-[#5C8374] outline-[#9EC8B9] rounded-md text-white px-2 py-2'>
                {options.map((item: any) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            <p className='h-4 text-sm text-red-400'>{error}</p>
        </div>
    )
}
