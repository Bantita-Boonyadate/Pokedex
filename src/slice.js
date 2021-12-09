import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'item',
    initialState: {
        allItem: [],
        showItem: [],
        addItem: []
    },
    reducers: {
        allItem: (state, action) => {
            state.allItem.push(action.payload)
            state.showItem.push(action.payload)
        },
        addItem: (state, action) => {
            console.log(action.payload)
            state.addItem.push(action.payload)
            state.showItem = state.showItem.filter(item => item.id !== action.payload.id)
            state.allItem = state.allItem.filter(item => item.id !== action.payload.id)
            
        },
        deleteItem: (state, action) => {
            state.addItem = state.addItem.filter(item => item.id !== action.payload.id)
            state.showItem.push(action.payload)
            state.allItem.push(action.payload)
        },
        searchItem: (state, action) => {
            if(action.payload) {
                state.showItem = state.showItem.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()) || item.type.toLowerCase().includes(action.payload.toLowerCase()))

            } else {
                state.showItem = state.allItem
            }
        }
    }
})

export default slice.reducer;
const allItem = slice.actions.allItem
const addItem = slice.actions.addItem
const deleteItem = slice.actions.deleteItem
const searchItem = slice.actions.searchItem
export { allItem, addItem, deleteItem, searchItem }