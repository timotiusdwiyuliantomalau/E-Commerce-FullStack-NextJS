import { createSlice } from "@reduxjs/toolkit";

export const actionSlice= createSlice({
    name: "actionSlice",
    initialState: false,
    reducers: {
        action: (state) => state=!state,
    },
})
export default actionSlice.reducer;
export const { action } = actionSlice.actions;