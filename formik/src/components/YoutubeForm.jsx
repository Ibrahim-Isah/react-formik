import React , { useState } from 'react'
import { Formik , Form , Field , ErrorMessage, FieldArray, FastField} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
            name: '',
            email: '', 
            channel: '',
            comments: '',
            address: '',
            social: {
                facebook: '',
                twitter: ''
            },
            phoneNumbers: [ '' , '' ],
            phNumbers: ['']
        }
const onSubmit = (values, onSubmitProps) => {
    console.log('Data Form' , values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
})

const loadValues = {
            name: 'Isah',
            email: 'isah@mail.com', 
            channel: 'devAbba',
            comments: 'common',
            address: 'meto zone',
            social: {
                facebook: '',
                twitter: ''
            },
            phoneNumbers: [ '' , '' ],
            phNumbers: ['']
        }

function YoutubeForm() {
    const [savedValues, setSavedValues] = useState(null)

    return (
        <Formik
            initialValues={savedValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnMount
            enableReinitialize
        >
            {
                formik => {
                    console.log("E be things", formik )
                   return  <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component={TextError}/>
                </div>
                
                
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email">
                        {errorMsg => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
                </div>
                

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor="comment">Comments</label>
                    <Field as="textarea" id="comment" name="comments" />
                    <ErrorMessage name='comments' component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <FastField name="address">
                        {
                            (props) => {
                                const {meta , field } = props
                                return  <div>
                                            <input type='text' id='address'  {...field}/>
                                            {meta.touched && meta.errors && <div>{meta.errors}</div>}
                                        </div>
                            }
                        }
                    </FastField>
                </div>

                <div className="form-control">
                    <label htmlFor="facebook">Facebook</label>
                    <Field type='text' id='facebook' name='social.facebook'/>
                </div>

                <div className="form-control">
                    <label htmlFor="twitter">Twitter</label>
                    <Field type='text' id='twitter' name='social.twitter'/>
                </div>
                
                <div className="form-control">
                    <label htmlFor="primaryPh">Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]'/>
                </div>

                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
                </div>

                <div className="form-control">
                    <label htmlFor="phNumbers">List of phone numbers</label>
                    <FieldArray name='phNumbers'>
                        {
                            fieldArrayProps => {
                                const {push , remove , form } = fieldArrayProps
                                const {values} = form
                                const {phNumbers} = values

                                return <div>
                                    {phNumbers.map((phNumber, index) => (
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`} />

                                            {index > 0 && <button onClick={() => remove(index)}>{' '}-{' '}</button>}
                                            <button onClick={() => push('')}>{' '}+{' '}</button>
                                        </div>
                                    ))}
                                </div>
                            }
                        }
                    </FieldArray>
                </div>
                        {/* <button type='button' onClick={() => formik.validateField('comments')}>Validate comment</button>
                        <button type='button' onClick={() => formik.validateForm()}>Validate all</button>
                        <button type='button' onClick={() => formik.setFieldTouched('comments')}>tounch comment</button>
                        <button type='button' onClick={() => formik.setTouched({
                            name: true,
                            channel: true,
                            comments: true,
                            email: true
                        })}>tounch all</button> */}
                        <button type='reset'>Reset</button>
                        <button type='button' onClick={() => setSavedValues(loadValues)}>load save data</button>
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>submit</button>
                {/* You can also use formik.dirty in disable */}
            </Form>
                }
            }
            
        </Formik>
    )
}

export default YoutubeForm
