import React, { useEffect, useState } from 'react';
import InputField from '../FormFields/InputField';
import RadioButton from '../FormFields/RadioButton';
import TextArea from './TextArea';
import DropDown from './DropDown';
import { useFormik } from 'formik';
import { formSchema } from '../../Validation/FormSchema';

export default function Form(props: any) {
    const { setShowForm } = props;
    const [showExperince, setShowExperience] = useState(false)

    const initialValues = {
        name: '',
        phone: '',
        age: '',
        city: '',
        company: '',
        experience: '',
        complaint: '',
        doctor: ''
    }
    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue } =
        useFormik({
            initialValues: initialValues,
            validationSchema: formSchema,
            onSubmit: (values, action) => {
                console.log(values);
            },
        });

    useEffect(() => {
        if (parseInt(values.age) > 40) {
            setShowExperience(true);
            setFieldValue('experience', '')
        } else {
            setFieldValue('experience', 'NA')
        }
    }, [values.age])
    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={handleSubmit} className='max-w-[600px] w-full flex flex-col items-center'>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField
                        label={'Full Name :'}
                        type={'text'}
                        error={errors.name}
                        placeHolder={'Enter Full Name'}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.name}
                        value={values.name}
                        name={'name'}
                    />
                    <InputField
                        label={'Phone Number :'}
                        type={'number'}
                        error={errors.phone}
                        placeHolder={'Enter Phone Number'}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.phone}
                        value={values.phone}
                        name={'phone'}
                    />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField
                        label={'Age :'}
                        type={'number'}
                        error={errors.age}
                        placeHolder='Enter your age'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.age}
                        value={values.age}
                        name={'age'}
                    />
                    <DropDown
                        label={'City :'}
                        options={[{ label: '', value: '' }, { label: 'abc', value: 'abc' }, { label: 'def', value: 'def' }, { label: 'ghi', value: 'ghi' }]}
                        error={errors.city}

                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.city}
                        value={values.city}
                        name={'city'}
                    />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <InputField
                        label={'Company :'}
                        type={'text'}
                        error={errors.company}
                        placeHolder='Enter your company name'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.company}
                        value={values.company}
                        name={'company'}
                    />
                    <RadioButton
                        label={'Do you have any prior experience with physiotherapy ?'}
                        error={errors.experience}
                        name='experience'
                        handleChange={handleChange}
                        values={values.experience}
                        showExperince={showExperince}
                    />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <TextArea
                        label={'Chief complaints :'}
                        error={errors.complaint}
                        name={'complaint'}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.complaint}
                        value={values.complaint}
                    />
                </div>
                <div className='block max-w-[600px] w-[90vw] md:flex md:justify-center md:items-center gap-4'>
                    <DropDown
                        label={'Best available doctors :'}
                        options={[{ label: '', value: '' }, { label: 'abc', value: 'abc' }, { label: 'def', value: 'def' }, { label: 'ghi', value: 'ghi' }]}
                        error={errors.doctor}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        touched={touched.doctor}
                        value={values.doctor}
                        name={'doctor'}
                    />
                </div>
                <div className=' max-w-[600px] w-[90vw] flex justify-between items-center gap-4'>
                    <button className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none ' onClick={() => setShowForm(false)}>Cancel</button>
                    <button type="submit" className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none '>Submit</button>
                </div>

            </form>

        </div>
    )
}
