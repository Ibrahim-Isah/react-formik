import React from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import RadioButton from './RadioButton'
import Select from './Select'
import Textarea from './Textarea'
import Datepicker from './Datepicker'
import ChakraInput from './ChakraInput'

function FormControl(props) {
    const { control , ...rest } = props
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <Checkbox {...rest} />
        case 'date':
            return <Datepicker {...rest} />
        case 'chakrainput':
            return <ChakraInput {...rest} />
        default: return null
    }
}

export default FormControl
