import { combineReducers } from '@reduxjs/toolkit';
import commonSlice from "./Features/commonSlice";
import currentLocation from './Features/currentLocation';
import authSlice from './Features/authSlice';

const rootReducer = combineReducers({
    pageContext:commonSlice,
    authUser:authSlice,
    currentLocation:currentLocation,
});

export default rootReducer;