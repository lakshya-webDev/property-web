import { combineReducers } from '@reduxjs/toolkit';
import commonContext from "./Features/commonSlice";
import currentLocation from './Features/currentLocation';
import authContext from './Features/authSlice';
import propertyData from "./Features/propertySlice"

const rootReducer = combineReducers({
    commonContext,
    authContext,
    propertyData,
    currentLocation,
});

export default rootReducer;