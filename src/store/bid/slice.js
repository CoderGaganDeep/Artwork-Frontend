import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allArtworks: [],
  artworkDetails: null,
};

export const bidSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    postNewBidSuccess: (state, action) => {
      state.artworkDetails = action.payload;
    },
  },
});

export const { postNewBidSuccess } = bidSlice.actions;
export default bidSlice.reducer;
