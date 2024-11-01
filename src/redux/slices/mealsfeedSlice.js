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
    postLikeTweet: (state, action) => {
      const itemId = action.payload;
      state.allMealsFeed.forEach((feed) => {
        if (feed.postId === itemId) {
          feed.likes += 1;
          feed.isLikedByUser = true;
        }
      });
    },
    postUnlikeTweet: (state, action) => {
      const itemId = action.payload;
      state.allMealsFeed.forEach((feed) => {
        if (feed.postId === itemId) {
          feed.likes -= 1;
          feed.isLikedByUser = false;
        }
      });
    },
    postBookmarkTweet: (state, action) => {
      const itemId = action.payload;
      state.allMealsFeed.forEach((feed) => {
        if (feed.postId === itemId) {
          feed.bookmarks += 1;
          feed.isBookmarkedByUser = true;
        }
      });
    },
    postUnbookmarkTweet: (state, action) => {
      const itemId = action.payload;
      state.allMealsFeed.forEach((feed) => {
        if (feed.postId === itemId) {
          feed.bookmarks -= 1;
          feed.isBookmarkedByUser = false;
        }
      });
    },
  },
});

export const { clearMealsFeed, postLikeTweet, postUnlikeTweet, postBookmarkTweet, postUnbookmarkTweet } = mealsfeedSlice.actions;

export default mealsfeedSlice.reducer;
