import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toDoList: localStorage.getItem('toDoList') ? JSON.parse(localStorage.getItem('toDoList')) : []
}

const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.toDoList = [...state.toDoList, { id: Date.now(), title: action.payload, completed: false }]
            localStorage.setItem('toDoList', JSON.stringify(state))
        }
    }
})

export const { addToDo } = toDoSlice.actions
export default toDoSlice.reducer