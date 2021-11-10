import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'


function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Supplied').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => console.log('Form data', values)

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                                <FormControl control='input' name='email' label='Email Address' />
                                <FormControl control='input' name='password' label='Enter Password' />
                                <button type='submit' disabled={!formik.isValid}>Submit</button>
                           </Form>
            }
        </Formik>
    )
}

export default LoginForm
