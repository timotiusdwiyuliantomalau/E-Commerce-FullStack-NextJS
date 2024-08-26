import { createSlice } from "@reduxjs/toolkit";

export const addLocationSlice = createSlice({
    name: "addLocation",
    initialState:false,
    reducers:{
        openAddLocation:(state)=>state=true,
        closeAddLocation:(state)=>state=false
    }
})

export default addLocationSlice.reducer;
export const {openAddLocation,closeAddLocation} = addLocationSlice.actions