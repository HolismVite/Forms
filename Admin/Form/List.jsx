import { List, ItemAction, ValueWithTitle } from '@List'
import ListAltIcon from '@mui/icons-material/ListAlt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import EditForm from './Edit';

const headers = <>
    <th>Key</th>
    <th>Title</th>
    <td>Fields count</td>
</>

const row = (item) => <>
    <td>{item.key}</td>
    <td>
        <ValueWithTitle
            value={item.title}
            title={item.description}
        />
    </td>
    <td>{item.fieldsCount}</td>
</>

const itemActions = (item) => <>
    <ItemAction
        title='Manage fields'
        icon={ListAltIcon}
        goTo={`/fields?formId=${item.id}`}
    />
    <ItemAction
        title='See filled forms'
        icon={NoteAltIcon}
        goTo={`/savedForms?formId=${item.id}`}
    />
</>

const Forms = () => {
    return <List
        title="Forms"
        entityType='form'
        headers={headers}
        row={row}
        edit={EditForm}
        itemActions={itemActions}
    />
}

export default Forms;
export { Forms }