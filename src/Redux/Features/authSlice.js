import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const userData={
        userDetails:action.payload,
        isAuthenticated:true
      }
      sessionStorage.setItem("authUser", JSON.stringify(userData)); // Store the user data in sessionStorage
      state.isAuthenticated = true; // Set the user as authenticated
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      sessionStorage.removeItem("authUser");
      state.currentUser = null;
      state.isAuthenticated = false; 
      state.loading = false;
    },
  },
});

export const { saveUser, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;
