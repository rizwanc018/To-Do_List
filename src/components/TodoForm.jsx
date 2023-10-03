import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
// import useStyles from './styles';


const TodoForm = () => {
    const [todoText, setTodoText] = useState('')

    const handleTodoChange = (e) => {
        setTodoText(e.target.value);
    }

    return (
        <Box
            display='flex'
        >
            <TextField
                label="Add Todo"
                fullWidth
                value={todoText}
                placeholder='🖊️ Add todo...'
                onChange={handleTodoChange}

            />
            <Button
                type="submit"
                color="primary"
                variant="contained" 
                style={{ marginLeft: '10px' }}
                >
                <AddIcon />
            </Button>
        </Box>
    )
}

export default TodoForm