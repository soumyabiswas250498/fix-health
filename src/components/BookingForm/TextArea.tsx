import React from 'react'

export default function TextArea(props: any) {
    const { label, error } = props;
    return (
        <div className='flex flex-col w-full my-2'>
            <label htmlFor="textArea" className='pb-2 text-white'>{label}</label>

            <textarea id="textArea" name="textArea" rows={4} cols={50} className='bg-[#5C8374] w-full rounded-md outline-[#9EC8B9] text-white px-4 py-2'>

            </textarea>
            <p className='h-4 text-sm text-red-400'>{error}</p>
        </div>
    )
}
