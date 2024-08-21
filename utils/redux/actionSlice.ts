import { createSlice } from "@reduxjs/toolkit";

export const actionSlice= createSlice({
    name: "actionSlice",
    initialState: false,
    reducers: {
        action: (state) => state=true,
    },
})
export default actionSlice.reducer;
export const { action } = actionSlice.actions;