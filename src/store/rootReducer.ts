import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/Theme/ThemeSlice";
import filmsReducer from "../features/Films/FilmsSlice";
import planetsReducer from "../features/Planets/PlanetsSlice";
import charactersReducer from "../features/Characters/CharactersSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  planets: planetsReducer,
  characters: charactersReducer,
});

export default rootReducer;
