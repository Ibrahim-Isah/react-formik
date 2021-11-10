import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

function EnrollmentForm() {
    const dropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'React', value:'react'},
        {key: 'Vue', value:'vue'},
        {key: 'Angular', value:'angular'}
    ]

    const checkOptions = [
        {key: 'HTML', value:'html'},
        {key: 'CSS', value:'css'},
        {key: 'Javascript', value:'javascript'}
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        courseDate: Yup.date().required('Required').nullable()
    })

    const onSubmit = values => console.log('Form data' , values)

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                    <FormControl control='input' name='email' label='Email' type='email' />
                    <FormControl control='textarea' name='bio' label='Bio' />
                    <FormControl control='select' name='course' label='Course' options={dropdownOptions} />
                    <FormControl control='checkbox' name='skills' label='Skills' options={checkOptions} />
                    <FormControl control='date' name='courseDate' label='Course Date' />
                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default EnrollmentForm
