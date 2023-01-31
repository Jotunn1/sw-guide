import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/ThemeSlice";
import filmsReducer from "../features/Films/FilmsSlice";
import planetsReducer from "../features/Planets/PlanetsSlice";

const rootReducer = combineReducers({
    theme: themeReducer,
    films: filmsReducer,
    planets: planetsReducer,
});

export default rootReducer;
