import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name :"add",
    initialState: {
        items: [],
    },
    reducers : {
        addItems : (state, action) => {
            state.items.push({...action.payload, status: "open"});
        },
        closeItem: (state, action) => {
            if (state.items[action.payload].status === "open") {
                state.items[action.payload].status = "closed"; 
            }
        },
    }
})

export default addSlice.reducer;
export const {addItems, closeItem} = addSlice.actions;

// using the spread operator (...) is a common and effective way to copy existing properties from 
//an object while also adding or modifying properties in JavaScript, especially when dealing with
// state updates in Redux. so we are modifying so we should use ...
