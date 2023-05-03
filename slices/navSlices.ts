import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InfoState {
  origin: string | null;
  destination: string | null;
  travelTime: string | null;
}

const initialState: InfoState = {
  origin: null,
  destination: null,
  travelTime: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTime } = infoSlice.actions;

// Selectors
export const selectOrigin = (state: RootState) => state.info.origin;
export const selectDestination = (state: RootState) => state.info.destination;
export const selectTravelTime = (state: RootState) => state.info.travelTime;

export default infoSlice.reducer;
