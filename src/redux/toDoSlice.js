import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : []

const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newToDo = { id: Date.now(), title: action.payload, completed: false };
            localStorage.setItem('toDoList', JSON.stringify([...state, newToDo]))
            return [...state, newToDo]
        },
        deleteToDo: (state, action) => {
            const updatedToDoList = state.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('toDoList', JSON.stringify(updatedToDoList))
            return updatedToDoList
        },
    }
})

export const { addToDo, deleteToDo } = toDoSlice.actions
export default toDoSlice.reducer