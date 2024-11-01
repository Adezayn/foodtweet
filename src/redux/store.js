import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./slices/mealSlice";
import userReducer from "./slices/userSlice";
import vendorsReducer from "./slices/vendorsSlice"
import mealsFeedReducer from "./slices/mealsfeedSlice";

export const store = configureStore({
  reducer: {
    meal: mealReducer,
    user: userReducer,
    vendors: vendorsReducer,
    mealsFeed: mealsFeedReducer,
  },
});
