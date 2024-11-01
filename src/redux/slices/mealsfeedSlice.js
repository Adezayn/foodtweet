import { createSlice } from "@reduxjs/toolkit";
import { allMealsFeed } from "../../utils/mealsfeed";
import { allVendors } from "../../utils/vendors";
import { allFoodsByVendors } from "../../utils/foodPostByVendors";

const allVendorsById = allVendors.reduce((acc, vendor) => {
  acc[vendor.id] = vendor;
  return acc;
}, {});

const initialState = {
  allMealsFeed: allMealsFeed.map((feed) => {
     const vendor = allVendorsById[feed.authorId];
    return {
      ...feed,
      author: vendor?.userName,
      authorImg: vendor?.userImg,
      caption: allFoodsByVendors[feed.postId]?.caption,
      foodImg: allFoodsByVendors[feed.postId]?.foodImg,
      isFollowing: vendor?.isFollowing,
    };
  }),
};

const mealsfeedSlice = createSlice({
  name: "mealsfeed",
  initialState,
  reducers: {
    clearMealsFeed: (state) => {
      state.allMealsFeed = [];
    },
    // getAllMealsFeed: (state) => {
    //   state.allMealsFeed = allMealsFeed.map(feed => {
    //    return {
    //      ...feed,
    //      author: allVendors[feed.authorId]?.userName,
    //      authorImg: allVendors[feed.authorId]?.accountImg,
    //      caption: allFoodsByVendors[feed.postId]?.caption
    //    };
    // })
    // },
  },
});

export const { clearMealsFeed } = mealsfeedSlice.actions;

export default mealsfeedSlice.reducer;
