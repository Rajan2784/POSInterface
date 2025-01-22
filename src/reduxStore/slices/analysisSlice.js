import { createSlice } from "@reduxjs/toolkit";

const analysisSlice = createSlice({
  name: "analytics",
  initialState: {
    data: [],
  },
  reducers: {
    addDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addDetails } = analysisSlice.actions;
export default analysisSlice.reducer;