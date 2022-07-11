import { List, BooleanProperty, ValueWithTitle } from '@List'
import EditField from './Edit'

const headers = <>
    <th>Key</th>
    <th>Type</th>
    <th>Label</th>
    <th>Placeholder</th>
    <th>Required?</th>
    <th>Pattern</th>
    <th>Default</th>
    <th>RTL?</th>
</>

const row = (item) => <>
    <td>{item.key}</td>
    <td>{item.type}</td>
    <td>{item.label}</td>
    <td>
        <ValueWithTitle
            value={item.placeholder}
            title={item.hint}
        />
    </td>
    <td>
        <BooleanProperty
            value={item.isRequired}
            actionUrl={`/field/toggleIsRequired/${item.id}`}
        />
    </td>
    <td>{item.regex}</td>
    <td>{item.defaultValue}</td>
    <td>
        <BooleanProperty
            value={item.direction === 'rtl'}
            actionUrl={`/field/toggleDirection/${item.id}`}
        />
    </td>
</>

const Fields = () => {
    return <List
        title='Fields'
        entityType='field'
        headers={headers}
        row={row}
        edit={EditField}
    />
}

export default Fields