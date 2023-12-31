import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Checkbox from '@mui/material/Checkbox';
import { deleteToDo, toggleComplete } from '../redux/toDoSlice';
import EditForm from './EditForm';
import { useState } from 'react';

const TodoList = () => {
    const [editTodoId, setEditTodoId] = useState(null);

    const todos = useSelector((state) => state.toDoList)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteToDo(id));
    }

    const handleComplete = (id) => {
        dispatch(toggleComplete(id));
    }

    const handleEdit = (id) => {
        setEditTodoId(id)
    }

    const cancelEdit = () => {
        setEditTodoId(null)
    }

    return (
        <List>
            {todos.map((todo) => (
                editTodoId === todo.id ? (
                    <EditForm id={editTodoId} setEditTodoId={setEditTodoId} title={todo.title} />
                ) : (
                    <ListItem key={todo.id} >
                        <Checkbox
                            edge='start'
                            aria-label="task finished"
                            onClick={() => handleComplete(todo.id)}
                            checked={todo.completed}
                        />
                        <ListItemText
                            primary={todo.title}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => handleEdit(todo.id)}>
                                <DriveFileRenameOutlineOutlinedIcon style={{ color: 'blue' }} />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => handleDelete(todo.id)}>
                                <DeleteOutlinedIcon style={{ color: 'red' }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            ))}
        </List >
    )
}

export default TodoList