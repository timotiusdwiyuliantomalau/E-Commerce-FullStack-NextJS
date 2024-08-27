
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: JSON.parse(localStorage.getItem("user") || "[]").cart?JSON.parse(localStorage.getItem("user") || "[]").cart:[],
  reducers: {
    addToCart: (state:Array<any>, action: PayloadAction<object>) => {
      state.push(action.payload);
    },
    setCart:(state,action:PayloadAction<Array<any>>)=>state=action.payload
  },
});
export const { addToCart,setCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;