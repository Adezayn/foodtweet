import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import userReducer from "./slices/userSlice";
import vendorsReducer from "./slices/vendorsSlice"

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    user: userReducer,
    vendors: vendorsReducer
  },
});
