import { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/toDoSlice';

const EditForm = ({ id, setEditTodoId, title }) => {
    const [todoTitle, setToDoTitle] = useState(title)
    const dispatch = useDispatch()

    const handleTodoChange = (e) => {
        setToDoTitle(e.target.value);
    }

    const handleCancel = () => {
        setEditTodoId(null)
    }

    const handleSave = () => {
        if (todoTitle.trim()) {
            dispatch(editTodo({ id, todoTitle }))
            setToDoTitle('')
            setEditTodoId(null)
        }
    }


    return (
        <Box
            display='flex'
            sx={{ marginTop: '20px' }}
        >
            <TextField
                label="Edit"
                fullWidth
                value={todoTitle}
                placeholder='🖊️ Edit todo...'
                onChange={handleTodoChange}
            />
            <Button
                color="primary"
                variant="outlined"
                style={{ marginLeft: '10px' }}
                onClick={handleCancel}
            >
                <CancelOutlinedIcon />
            </Button>

            <Button
                color="primary"
                variant="outlined"
                style={{ marginLeft: '10px' }}
                onClick={handleSave}
            >
                <SaveOutlinedIcon />
            </Button>
        </Box>
    )
}

export default EditForm