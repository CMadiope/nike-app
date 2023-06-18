import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkList: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    clearBookmarks: (state) => {
      state.bookmarkList = [];
    },
    addToBookmark: (state, { payload }) => {
      if (
        state.bookmarkList.findIndex((item) => item._id === payload._id) !== -1
      ) {
        const index = state.bookmarkList.findIndex(
          (item) => item._id === payload._id
        );
        state.bookmarkList[index].quantity = 1;
      } else {
        payload.quantity = 1;
        state.bookmarkList.push(payload);
      }
    },
    removeBookmark: (state, { payload }) => {
      const results = state.bookmarkList.find(
        (item) => item._id === payload._id
      );

      if (results.quantity === 1) {
        state.bookmarkList = state.bookmarkList.filter(
          (item) => item._id !== payload._id
        );
      } else {
        results.quantity--;
      }
    },
  },
});

export const { addToBookmark, removeBookmark, clearBookmarks } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
