// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

//const url = "https://www.course-api.com/react-useReducer-cart-project";

const initialState = {
  name: "Dolapo",
  username: "@ade_dolapo",
  image: "./assets/man-one.jpg",
  reviews: 12,
  following: 100,
};

// export const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (name, thunkAPI) => {
//     try {
//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getCartItems.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(getCartItems.fulfilled, (state, action) => {
  //         // console.log(action);
  //         state.isLoading = false;
  //         state.cartItems = action.payload;
  //       })
  //       .addCase(getCartItems.rejected, (state, action) => {
  //         console.log(action);
  //         state.isLoading = false;
  //       });
  //   },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  userSlice.actions;

export default userSlice.reducer;
