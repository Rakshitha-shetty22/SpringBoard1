import {createSlice} from '@reduxjs/toolkit'

const roleSlice = createSlice({
    name: "role",
    initialState: {
        currentRole: []
    },
    reducers: {
        addRole : (state,action) =>{
            state.currentRole = action.payload;
        }
    }
})

export default roleSlice.reducer;
export const {addRole} = roleSlice.actions;