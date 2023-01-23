import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/ThemeSlice";
import filmsReducer from "../features/theme/FilmsSlice";

const rootReducer = combineReducers({
    theme: themeReducer,
    films: filmsReducer,
});

export default rootReducer;
