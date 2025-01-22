import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customer: {},
  },
  reducers: {
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
    clearCustomerDetails: (state) => {
      state.customer = {};
    },
  },
});

export const { addCustomer,clearCustomerDetails } = customerSlice.actions;
export default customerSlice.reducer;
