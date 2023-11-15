import { createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../../types";

interface PlanetsState {
  vehiclesList: Vehicle[] | [];
  activeVehicle: Vehicle | {};
}

const initialState: PlanetsState = {
  vehiclesList: [],
  activeVehicle: {},
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehiclesList: (state, action) => {
      // console.log(action.payload, "vehicles from redux");
      state.vehiclesList = [...action.payload];
    },
    setActiveVehicle: (state, action) => {
      state.activeVehicle = action.payload;
    },
  },
});

export const { setActiveVehicle, setVehiclesList } = vehiclesSlice.actions;
export const selectActiveVehicle = (state: {
  vehicles: { activeVehicle: any };
}) => state.vehicles.activeVehicle;
export const selectPlanetsList = (state: { vehicles: { vehiclesList: any } }) =>
  state.vehicles.vehiclesList;
export default vehiclesSlice.reducer;
