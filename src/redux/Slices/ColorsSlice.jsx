import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carBodyColor: "#ffffff",
  InteriorColor: "#000000",
  camera: {
    fov: 30,
    position: [4.5, 1.6, 4.3],
  },
};

const ColorsSlice = createSlice({
  name: "carColors",
  initialState,
  reducers: {
    setBodyColor: (state, action) => {
      state.carBodyColor = action.payload.color;
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
    setCamera: (state, action) => {
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
    setInteriorColor: (state, action) => {
      state.InteriorColor = action.payload.color;
      state.camera.fov = action.payload.fov;
      state.camera.position = action.payload.position;
    },
  },
});

export const { setBodyColor, setInteriorColor, setCamera } =
  ColorsSlice.actions;
export default ColorsSlice.reducer;
