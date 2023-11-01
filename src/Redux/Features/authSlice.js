import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { saveUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
