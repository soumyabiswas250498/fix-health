import React from 'react'

export default function RadioButton(props: any) {
    const { label, options, error } = props;
    return (
        <div className='w-full my-2 text-white md:w-1/2'>
            <h1 className='pb-1 text-sm md:text-base '>Do you have any prior experience with physiotherapy ?</h1>
            <div className='flex max-w-[250px] justify-between px-4 '>
                <label className="flex items-center gap-2 hover:bg-[#5C8374] h-5 px-2 rounded-md cursor-pointer select-none">
                    <p>Yes</p>
                    <input type="radio" name="radio" />
                </label>
                <label className="flex items-center gap-2 hover:bg-[#5C8374] h-5 px-2 rounded-md cursor-pointer select-none">
                    <p>No</p>
                    <input type="radio" name="radio" />
                </label>
            </div>
            <p className='h-4 text-sm text-red-400'>error</p>
        </div>
    )
}
