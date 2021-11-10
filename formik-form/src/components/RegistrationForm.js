import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'


function RegistrationForm() {
    const options = [
        {key: 'email', value: 'emailcon'},
        {key: 'phone' , value: 'phonecon'}
    ]

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        modeOfContact: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email Format').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password') , ''], 'Password must Match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact' , {
            is: 'phonecon',
            then: Yup.string().required('Required')
        })
    })

    const onSubmit = values => console.log('Data values' , values)

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                    <FormControl control='input' name='name' type='text' label='name' />
                    <FormControl control='input' name='email' type='email' label='Email' />
                    <FormControl control='input' name='password' type='password' label='Password' />
                    <FormControl control='input' name='confirmPassword' type='password' label='Confirm Password' />
                    <FormControl control='radio' name='modeOfContact'  label='Pick mode of Contact' options={options} />
                    <FormControl control='input' name='phone' type='text' label='Phone Number' />
                    <button type='submit' disabled={!formik.isValid} >Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default RegistrationForm
