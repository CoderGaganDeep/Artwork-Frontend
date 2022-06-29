import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allArtworks: [],
  artworkDetails: null,
};

export const auctionSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    newArtworkSucess: (state, action) => {
      state.artworkDetails = action.payload;
    },
  },
});

export const { newArtworkSucess } = auctionSlice.actions;
export default auctionSlice.reducer;
