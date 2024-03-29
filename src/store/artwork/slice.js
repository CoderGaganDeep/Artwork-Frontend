import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allArtworks: [],
  artworkDetails: null,
};

export const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    fetchArtworkSuccess: (state, action) => {
      state.allArtworks = action.payload; // get our list of artworks from the action payload
    },
    fetchArtworkByIdSuccess: (state, action) => {
      state.artworkDetails = action.payload;
    },
    incrementHeartSuccess: (state, action) => {
      state.artworkDetails = action.payload;
    },
    postNewBidSuccess: (state, action) => {
      state.artworkDetails = action.payload;
    },
  },
});

export const {
  fetchArtworkSuccess,
  fetchArtworkByIdSuccess,
  incrementHeartSuccess,
  postNewBidSuccess,
} = artworkSlice.actions;
export default artworkSlice.reducer;
