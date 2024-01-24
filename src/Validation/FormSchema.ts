import * as Yup from 'yup';

export const formSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('Enter First Name'),
  phone: Yup.string()
    .test(
      'len',
      'Must be exactly 10 digit',
      (val: any) => val.length === 10 && parseInt(val) > 0
    )
    .required('Enter valid Phone Number'),
  age: Yup.string()
    .test('len', 'Enter valid age', (val: any) => parseInt(val) > 0)
    .required('Enter valid age'),
  company: Yup.string().min(2).max(25).required('Enter Company Name'),
  complaint: Yup.string().min(2).max(25).required('Share Complaint'),
  experience: Yup.string().min(2).max(250).required('Share experience'),
  doctor: Yup.string().min(2).max(25).required('Select Doctor'),
  city: Yup.string().min(2).max(25).required('Select City'),
});
