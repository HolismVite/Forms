import { List } from '@List'

const headers = <>
    <th>Key</th>
</>

const row = (item) => <>
    <td>{item.key}</td>
</>

const SavedForms = () => {
    return <List
        title="Saved Forms"
        entityType='savedForm'
        headers={headers}
        row={row}
    />
}

export default SavedForms;
export { SavedForms }