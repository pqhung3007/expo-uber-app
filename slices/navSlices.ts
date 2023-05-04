import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Point {
  lat: number;
  lng: number;
}

interface Origin {
  location: Point;
  description: string;
}

interface Destination {
  location: Point;
  description: string;
}

interface TravelTime extends Element {}
interface InfoState {
  origin: Origin | null;
  destination: Destination | null;
  travelTime: TravelTime | null;
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
