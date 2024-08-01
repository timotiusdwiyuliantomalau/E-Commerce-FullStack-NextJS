import { createSlice } from "@reduxjs/toolkit";
type initialState = {
  login: boolean;
  register:boolean;
};
const initialState = {
  login: false,
  register:false,
} as initialState;

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    openLoginModal: () => {
      return {login:true,register:false};
    },
    closeLoginModal:()=>{
      return {login:false,register:false};
    },
    openRegisterModal:() => {
      return {login:false,register:true};
    },
    closeRegisterModal:()=>{
      return {login:false,register:false};
    },
  },
});
export const { openLoginModal,closeLoginModal,openRegisterModal,closeRegisterModal } = modalSlice.actions;
export default modalSlice.reducer;
