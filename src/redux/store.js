import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import userReducer from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    user: userReducer
  },
});
