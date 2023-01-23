import { combineReducers } from "@reduxjs/toolkit";
import  themeReducer from "../features/theme/ThemeSlice";

const rootReducer = combineReducers({ theme: themeReducer });


export default rootReducer;
