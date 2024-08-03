import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../features/Theme/ThemeSlice";
import filmsReducer from "../features/Films/FilmsSlice";
import planetsReducer from "../features/Planets/PlanetsSlice";
import vehiclesReducer from "../features/Vehicles/VehiclesSlice";
import charactersReducer from "../features/Characters/CharactersSlice";
import speciesReducer from "../features/Species/SpeciesSlice";
import starshipsReducer from "../features/Starships/StarshipsSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer,
  planets: planetsReducer,
  characters: charactersReducer,
  vehicles: vehiclesReducer,
  species: speciesReducer,
  starships: starshipsReducer,
});

export default rootReducer;
