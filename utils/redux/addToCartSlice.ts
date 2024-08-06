import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: JSON.parse(localStorage.getItem("user")||"[0]").cart,
  reducers: {
    addToCart: (state:object[], action: PayloadAction<object>) => {
      state.push(action.payload);
    },
  },
});
export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;