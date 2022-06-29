import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fetchArtworkById } from "../artwork/thunk";

//2. write a thunk to post bid
export const postNewBid =
  (email, amount, artworkId) => async (dispatch, getState) => {
    try {
      console.log("IN THUNK, trying to create a bid ");
      const token = getState().user.token;
      //2. make an axios request to `/${apiUrl}/space/${id}`
      const response = await axios.post(
        `${apiUrl}/bids`,
        { email, amount, artworkId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      //4. go to component and import this functions there
      //5. if you saw console.log, dispatch this action: dispatch(fetchSpacesSuccess(response.data));
      dispatch(fetchArtworkById(response.data.artworkId));
    } catch (error) {
      console.log("Thunk postNewBid: ", error.message);
    }
  };
