import { createSlice } from '@reduxjs/toolkit';

const propertyDataSlice = createSlice({
  name: 'propertyData',
  initialState: {},
  reducers: {
    setPropertyData: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setPropertyData } = propertyDataSlice.actions;
export default propertyDataSlice.reducer;
