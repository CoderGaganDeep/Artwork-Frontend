import { apiUrl } from "../../config/constants";
import axios from "axios";
import { newArtworkSucess } from "./slice";

//2. write a thunk to submit new Auction online
export const newArtwork =
  (title, minimumBid, ImageUrl) => async (dispatch, getState) => {
    try {
      const token = getState().user.token;
      //2. make an axios request to `/${apiUrl}/space/${id}`
      const response = await axios.post(
        `${apiUrl}/artworks`,
        { title, minimumBid, ImageUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      //4. go to component and import this functions there
      //5. if you saw console.log, dispatch this action: dispatch(fetchSpacesSuccess(response.data));
      dispatch(newArtworkSucess(response.data.artworkId));
    } catch (error) {
      console.log("Thunk postNewBid: ", error.message);
    }
  };
