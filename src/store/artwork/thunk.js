import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fetchArtworkSuccess, fetchArtworkByIdSuccess } from "./slice";

//1. write a thunk to fetch all spaces
export const fetchArtworks = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/artworks/`);
      console.log(response);
      dispatch(fetchArtworkSuccess(response.data));
    } catch (e) {
      console.log("error from fetchArtworks thunk: ", e.message);
    }
  };
};

//2. write a thunk to fetch space by id
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
      console.log("error from fetchArtworkById thunk: ", e.message);
    }
  };
};
