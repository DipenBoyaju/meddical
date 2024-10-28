import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: '',
  token: '',
  isAdmin: false
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload.admin;
      state.token = action.payload.token;
      state.isAdmin = true;
    },
    logoutAdmin: (state) => {
      state.admin = '';
      state.token = '';
      state.isAdmin = false;
    },
  }
})

export const { setAdmin, logoutAdmin } = adminSlice.actions;

export default adminSlice.reducer;