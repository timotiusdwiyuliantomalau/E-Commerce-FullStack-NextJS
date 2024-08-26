
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") || "[]").cart,
  reducers: {
    addToCart: (state:object[], action: PayloadAction<object>) => {
      state.push(action.payload);
    },
  },
});
export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;