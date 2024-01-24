import React from 'react'

interface Ipops {
    label: string;
    error: string | undefined;
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: string;
    showExperince: boolean;
}

export default function RadioButton(props: Ipops) {
    const { label, error, name, handleChange, values, showExperince } = props;
    return (
        <div className={`w-full my-2 text-white md:w-1/2 ${showExperince ? '' : 'pointer-events-none'}`}>
            <h1 className='pb-1 text-sm md:text-base '>{label}</h1>
            <div className='flex max-w-[250px] justify-between px-4 '>
                <label className="flex items-center gap-2 hover:bg-[#5C8374] h-5 px-2 rounded-md cursor-pointer select-none">
                    <p>Yes</p>
                    <input type="radio" name={name} value={"Yes"} checked={values === 'Yes'} onChange={handleChange} />
                </label>
                <label className="flex items-center gap-2 hover:bg-[#5C8374] h-5 px-2 rounded-md cursor-pointer select-none">
                    <p>No</p>
                    <input type="radio" name={name} value={"No"} checked={values === 'No'} onChange={handleChange} />
                </label>
            </div>
            <p className='h-4 text-sm text-red-400'>{(error && showExperince) && error}</p>
        </div>
    )
}
