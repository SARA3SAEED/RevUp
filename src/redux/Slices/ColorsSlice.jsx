import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carBodyColor: "#ffffff",
};

export const ColorsSlice = createSlice({
  name: "carColors",
  initialState,
  reducers: {
    setBodyColor: (state, action) => {
      state.carBodyColor = action.payload;
    },
  },
});
export const { setBodyColor } = ColorsSlice.actions;
export default ColorsSlice.reducer;
