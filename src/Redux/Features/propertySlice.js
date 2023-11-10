import { createSlice } from '@reduxjs/toolkit';

const propertyDataSlice = createSlice({
  name: 'propertyData',
  initialState: {
    propertyType: '', 
    address: {},
    propertyDetails: {},
    listedBy: {},
  },
  reducers: {
    setPropertyData: (state,action) => {
      state.propertyType = action.payload.propertyType;
      state.address = action.payload.address;
      state.listedBy = action.payload.listedBy;
      state.propertyDetails = action.payload.propertyDetails;
    },
    savePropertyData: (state) => {
      state.savedData = {
        propertyType: state.propertyType,
        address: state.address,
        propertyDetails: state.propertyDetails,
        listedBy: state.listedBy,
      };
    },
  },
});

export const { setPropertyData,savePropertyData } = propertyDataSlice.actions;
export default propertyDataSlice.reducer;
