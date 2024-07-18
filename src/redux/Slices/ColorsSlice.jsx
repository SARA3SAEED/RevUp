import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carBodyColor: "#ffffff",
  InteriorColor: "#000000",
  rimColor: "#000000",
  camera: {
    target: [0, 0, 0],
    position: [4.5, 1.6, 4.3],
  },
};

const ColorsSlice = createSlice({
  name: "carColors",
  initialState,
  reducers: {
    setBodyColor: (state, action) => {
      state.carBodyColor = action.payload.color;
      state.camera.target = action.payload.target;
      state.camera.position = action.payload.position;
    },
    setCamera: (state, action) => {
      state.camera.target = action.payload.target;
      state.camera.position = action.payload.position;
    },
    setInteriorColor: (state, action) => {
      state.InteriorColor = action.payload.color;
      state.camera.target = action.payload.target;
      state.camera.position = action.payload.position;
    },
    setRimColor: (state, action) => {
      state.rimColor = action.payload.color;
      state.camera.target = action.payload.target;
      state.camera.position = action.payload.position;
    },
  },
});

export const { setBodyColor, setRimColor, setInteriorColor, setCamera } =
  ColorsSlice.actions;
export default ColorsSlice.reducer;
