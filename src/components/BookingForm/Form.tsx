import React from 'react';
import InputField from '../FormFields/InputField';
import RadioButton from '../FormFields/RadioButton';
import TextArea from './TextArea';
import DropDown from './DropDown';

export default function Form() {
    return (
        <div className='flex justify-center w-full'>
            <form action="" className='max-w-[600px] w-full flex flex-col items-center'>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField label={'Full Name :'} type={'text'} error={'error'} placeHolder='Enter Full Name' />
                    <InputField label={'Phone Number :'} type={'text'} error={'error'} placeHolder='Enter Phone Number' />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField label={'Age :'} type={'number'} error={'error'} placeHolder='Enter your age' />
                    <DropDown label={'Best available doctors :'} options={[{ label: 'abc', value: 'abc' }, { label: 'def', value: 'def' }, { label: 'ghi', value: 'ghi' }]} error={'error'} />
                    {/* <InputField label={'City :'} type={'text'} error={'error'} placeHolder='Enter current city' /> */}
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField label={'Company :'} type={'text'} error={'error'} placeHolder='Enter your company name' />
                    <RadioButton label={'Do you have any prior experience with physiotherapy ?'} options={['Yes', 'No']} error={'error'} />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <TextArea label={'Chief complaints :'} error={'error'} />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <DropDown label={'Best available doctors :'} options={[{ label: 'abc', value: 'abc' }, { label: 'def', value: 'def' }, { label: 'ghi', value: 'ghi' }]} error={'error'} />

                </div>
            </form>

        </div>
    )
}
