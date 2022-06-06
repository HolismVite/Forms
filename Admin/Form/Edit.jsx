import { Form, Text, LongText } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please provide a title'
    />
    <LongText
        column='Description'
    />
</>

const EditForm = () => {
    return <Form
        entityType='form'
        inputs={inputs}
    />
}

export default EditForm