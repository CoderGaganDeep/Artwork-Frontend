import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fetchArtworkSuccess, fetchArtworkByIdSuccess } from "./slice";

//1. write a thunk to fetch all artworks
export const fetchArtworks = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/artworks/`);
      console.log(response);
      dispatch(fetchArtworkSuccess(response.data));
    } catch (e) {
      console.log("Thunk fetchArtworks: ", e.message);
    }
  };
};

//2. write a thunk to fetch artwork by id
export const fetchArtworkById = (bidId) => {
  return async (dispatch, getState) => {
    try {
      //2. make an axios request to `/${apiUrl}/space/${id}`
      const response = await axios.get(`${apiUrl}/artworks/${bidId}`);
      //3. console.log the response
      console.log(response);
      //4. go to component and import this functions there
      //5. if you saw console.log, dispatch this action: dispatch(fetchSpacesSuccess(response.data));
      dispatch(fetchArtworkByIdSuccess(response.data));
    } catch (e) {
      console.log("Thunk fetchArtworkById: ", e.message);
    }
  };
};

//2. write a thunk to increment heart
export const incrementHeart = (bidId, heartsIn) => {
  return async (dispatch, getState) => {
    try {
      //2. make an axios request to `/${apiUrl}/space/${id}`
      const response = await axios.patch(`${apiUrl}/artworks/${bidId}`, {
        hearts: heartsIn,
      });
      //3. console.log the response
      console.log(response);
      //4. go to component and import this functions there
      //5. if you saw console.log, dispatch this action: dispatch(fetchSpacesSuccess(response.data));
      dispatch(fetchArtworkByIdSuccess(bidId));
    } catch (e) {
      console.log("Thunk incrementHeart: ", e.message);
    }
  };
};
