import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Label'
        placeholder='Label'
    />
    <Text
        column='Placeholder'
        placeholder='Placeholder'
    />
    <Text
        column='Hint'
        placeholder='Hint'
    />
</>

const EditField = () => {
    return <DialogForm
        entityType='field'
        inputs={inputs}
    />
}

export default EditField