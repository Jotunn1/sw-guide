import { createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../../types";

interface VehiclesState {
  vehiclesList: Vehicle[] | [];
  activeVehicle: Vehicle | {};
}

const initialState: VehiclesState = {
  vehiclesList: [],
  activeVehicle: {},
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehiclesList: (state, action) => {
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
export const selectVehiclesList = (state: {
  vehicles: { vehiclesList: any };
}) => state.vehicles.vehiclesList;
export default vehiclesSlice.reducer;
