import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/toDoSlice';

const TodoForm = () => {
    const [toDoText, setToDoText] = useState('')
    const dispatch = useDispatch();

    const handleTodoChange = (e) => {
        setToDoText(e.target.value);
    }

    const handlesubmit = () => {
        if (toDoText.trim()) {
            dispatch(addToDo(toDoText));
            setToDoText('');
        }
    }

    return (
        <Box
            display='flex'
            sx={{marginTop: '20px'}}
        >
            <TextField
                label="Add Todo"
                fullWidth
                value={toDoText}
                placeholder='🖊️ Add todo...'
                onChange={handleTodoChange}
            />
            <Button
                color="primary"
                variant="contained"
                style={{ marginLeft: '10px' }}
                onClick={handlesubmit}
            >
                <AddIcon />
            </Button>
        </Box>
    )
}

export default TodoForm