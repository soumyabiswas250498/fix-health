import React, { useEffect, useState } from 'react';
import InputField from '../FormFields/InputField';
import RadioButton from '../FormFields/RadioButton';
import TextArea from './TextArea';
import DropDown from './DropDown';
import { useFormik } from 'formik';
import { formSchema } from '../../Validation/FormSchema';
import useCityDoctor from '../../Hooks/useCityDoctor';
import useGetReq from '../../Hooks/useGetReq';


interface Iprops {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Form(props: Iprops) {
    const { setShowForm, setSubmit } = props;
    const [cities, setCities] = useState([{ label: '', value: '' }])
    const [doctors, setDoctors] = useState([{ label: '', value: '' }])
    const [showExperince, setShowExperience] = useState(false);
    const { data, loading } = useGetReq('https://my-json-server.typicode.com/soumyabiswas250498/json-db/cityData');
    const { makeCityArr, makeDoctorArr } = useCityDoctor()

    useEffect(() => {
        if (data) {
            setCities([{ label: '', value: '' }, ...makeCityArr(data)]);
        }
    }, [data])


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

    const { values, errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue, resetForm } =
        useFormik({
            initialValues: initialValues,
            validationSchema: formSchema,
            onSubmit: (values, action) => {
                console.log(values);
                resetForm();
                setShowForm(false)
                setSubmit(true);
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

    useEffect(() => {
        if (values.city && data) {
            setDoctors([{ label: '', value: '' }, ...makeDoctorArr(data, values.city)])
        }

    }, [values.city, data])

    if (loading) {
        return (
            <div className='flex items-center justify-center w-full h-32'>
                <div className="loader"></div>
            </div>)
    } else {
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
                            options={cities}
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
                        <DropDown
                            label={'Best available doctors :'}
                            options={doctors}
                            error={errors.doctor}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched.doctor}
                            value={values.doctor}
                            name={'doctor'}
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
                        {showExperince && <RadioButton
                            label={'Do you have any prior experience with physiotherapy ?'}
                            error={errors.experience}
                            name='experience'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            values={values.experience}
                            touched={touched.experience}
                            showExperince={showExperince}
                        />}
                    </div>
                    <div className=' max-w-[600px] w-[90vw] flex justify-between items-center gap-4'>
                        <button className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none ' onClick={() => setShowForm(false)}>Cancel</button>
                        <button type="submit" className='bg-[#5C8374] hover:bg-[#9EC8B9] px-4 py-2 rounded-md text-yellow-50 cursor-pointer select-none '>Submit</button>
                    </div>

                </form>

            </div>
        )
    }


}
