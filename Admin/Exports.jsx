import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Fields  from './Field/List'
import Forms  from './Form/List'
import SavedForms  from './SavedForm/List'

const FormsRoutes = [
    {
        path: "/forms",
        component: Forms
    },
    {
        path: "/fields",
        component: Fields
    },
    {
        path: "/savedForms",
        component: SavedForms
    }
]

const FormsMenu = [
    {
        title: "Forms",
        icon: NoteAltIcon,
        superAdmin: true,
        children: [
            {
                title: "Forms",
                url: "/forms"
            },
            {
                title: "Saved Forms",
                url: "/savedForms"
            }
        ]
    }
]

export { Forms }
export { FormsMenu }
export { FormsRoutes }
export { SavedForms }