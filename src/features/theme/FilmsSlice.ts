import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../types";

interface FilmsState {
    filmsList: Film[] | [];
    activeFilm: Film | {};
}

const initialState: FilmsState = {
    filmsList: [],
    activeFilm: {},
};

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        setFilmsList: (state, action) => {
            console.log(action.payload, " payload from redux");
            state.filmsList = [...action.payload];
        },
        setActiveFilm: (state, action) => {
            state.activeFilm = action.payload;
        },
    },
});

export const { setActiveFilm, setFilmsList } = filmsSlice.actions;
export const selectActiveFilm = (state: { films: { activeFilm: any } }) =>
    state.films.activeFilm;
export const selectFilmsList = (state: { films: { filmsList: any } }) =>
    state.films.filmsList;
export default filmsSlice.reducer;
