import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carName: "",
  carBodyColor: "#ffffff",
  InteriorColor: "#000000",
  rimColor: "#000000",
  camera: {
    fov: 30,
    position: [4.5, 1.6, 4.3],
    target: [0, 0, 0],
  },
};

const ColorsSlice = createSlice({
  name: "carColors",
  initialState,
  reducers: {
    setCarName: (state, action) => {
      state.carName = action.payload.carName;
    },
    setBodyColor: (state, action) => {
      state.carBodyColor = action.payload.color;
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
    setCamera: (state, action) => {
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
    setTarget: (state, action) => {
      state.camera.target = action.payload.target;
    },
    setInteriorColor: (state, action) => {
      state.InteriorColor = action.payload.color;
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
    setRimColor: (state, action) => {
      state.rimColor = action.payload.color;
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
  },
});

export const {
  setCarName,
  setBodyColor,
  setRimColor,
  setTarget,
  setInteriorColor,
  setCamera,
} = ColorsSlice.actions;
export default ColorsSlice.reducer;
