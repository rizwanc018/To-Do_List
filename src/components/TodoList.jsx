import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { deleteToDo } from '../redux/toDoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.toDoList)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteToDo(id));
    }

    return (
        <List>
            {todos.map((todo) => (
                <ListItem key={todo.id} >
                    <Checkbox edge='start' aria-label="task finished" onClick={() => handleFinish(todo.id)} />
                    <ListItemText
                        primary={todo.title}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(todo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List >
    )
}

export default TodoList