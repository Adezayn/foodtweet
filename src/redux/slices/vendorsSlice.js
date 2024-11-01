import { createSlice } from "@reduxjs/toolkit";
import { allVendors } from "../../utils/vendors";

const initialState = {
    allVendors
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    clearFollowers: (state) => {
      state.allVendors = [];
    },
    followVendor: (state, action) => {
      const itemId = action.payload;
       state.allVendors.forEach((vendor) => {
        vendor.id === itemId ? vendor.isFollowing = true : vendor;
      });
    },
  },
});

export const {clearFollowers, followVendor} = vendorsSlice.actions;

export default vendorsSlice.reducer;
