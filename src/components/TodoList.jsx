import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Checkbox from '@mui/material/Checkbox';
import { deleteToDo, toggleComplete } from '../redux/toDoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.toDoList)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteToDo(id));
    }

    const handleComplete = (id) => {
        dispatch(toggleComplete(id));
    }

    return (
        <List>
            {todos.map((todo) => (
                <ListItem key={todo.id} >
                    <Checkbox
                        edge='start'
                        aria-label="task finished"
                        onClick={() => handleComplete(todo.id)} />
                    <ListItemText
                        primary={todo.title}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    />
                    <ListItemSecondaryAction>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleDelete(todo.id)}>
                            <DeleteOutlinedIcon style={{ color: 'red' }} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List >
    )
}

export default TodoList