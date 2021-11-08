import React from 'react'
import { Formik , Form } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

function FormikContainer() {
    const dropdownOptions = [
        {key: 'Select an option', value:''},
        {key: 'Option 1', value:'option1'},
        {key: 'Option 2', value:'option2'},
        {key: 'Option 3', value:'option3'}
    ]

    const radioOptions = [
        {key: 'Option 1', value:'rOption1'},
        {key: 'Option 2', value:'rOption2'},
        {key: 'Option 3', value:'rOption3'}
    ]

    const checkOptions = [
        {key: 'Option 1', value:'checkOption1'},
        {key: 'Option 2', value:'checkOption2'},
        {key: 'Option 3', value:'checkOption3'}
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkOption: []
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkOption: Yup.array().required('Required')
    })
    const onSubmit = values => console.log('form values', values)


    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            {
                formik => <Form>
                    <FormControl control='input' name='email' label='Email' type='email' />
                    <FormControl control='textarea' name='description' label='Description' />
                    <FormControl control='select' name='selectOption' label='Select a topic' options={dropdownOptions}/>
                    <FormControl control='radio' name='radioOption' label='Radio Topic' options={radioOptions} />
                    <FormControl control='checkbox' name='checkOption' label='Check Topic' options={checkOptions} />
                    <button type='submit'> Submit </button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer
