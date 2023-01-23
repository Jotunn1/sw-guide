import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { loadState } from "../utils/storage";

import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState: loadState(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();

export default store;
