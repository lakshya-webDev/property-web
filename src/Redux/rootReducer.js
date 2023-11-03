import { combineReducers } from '@reduxjs/toolkit';
import commonSlice from "./Features/commonSlice";
import currentLocation from './Features/currentLocation';
import authSlice from './Features/authSlice';
import propertyDataSlice from "./Features/propertySlice"

const rootReducer = combineReducers({
    pageContext:commonSlice,
    authUser:authSlice,
    propertyData:propertyDataSlice,
    currentLocation:currentLocation,
});

export default rootReducer;