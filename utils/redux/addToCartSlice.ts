import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: [],
  reducers: {
    addToCart: (state:object[], action: PayloadAction<object>) => {
      state.push(action.payload);
    },
  },
});
export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;