import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesList: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    clearFavourates: (state) => {
      state.favouritesList = [];
    },
    addToFavourite: (state, { payload }) => {
      const newItem = payload;
      if (!state.favouritesList.map((item) => item.id).includes(payload.id)) {
        state.favouritesList.push({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
        });
      }
    },
    removeFavourite: (state, { payload }) => {
      const updatedFavouriteList = state.favouritesList.filter(
        (item) => item.id != payload
      );
      state.favouritesList = updatedFavouriteList;
    },
  },
});

export const {addToFavourite, removeFavourite, clearFavourates} = favouriteSlice.actions

export default favouriteSlice.reducer
