import { createSlice } from "@reduxjs/toolkit";

const analysisSlice = createSlice({
  name: "analytics",
  initialState: {
    totalRevenue:0,
    totalServicesSold:0,
    totalRevenueGot:0,
    dueAmount:0
  },
  reducers: {
    analysis: (state, action) => {
      console.log(action.payload)
      state.totalRevenue += action.payload.totalAmount;
      state.totalRevenueGot += action.payload.amountReceived;
      state.dueAmount += action.payload.due;
      state.totalServicesSold += action.payload.soldServices;
    },
  },
});

export const { analysis } = analysisSlice.actions;
export default analysisSlice.reducer;