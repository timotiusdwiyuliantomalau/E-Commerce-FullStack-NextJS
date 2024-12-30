
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = (() => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).cart || [] : [];
  }
  return []; // Nilai default untuk server-side
})();
export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    addToCart: (state:Array<any>, action: PayloadAction<object>) => {
      state.push(action.payload);
    },
    setCart:(state,action:PayloadAction<Array<any>>)=>state=action.payload
  },
});
export const { addToCart,setCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;