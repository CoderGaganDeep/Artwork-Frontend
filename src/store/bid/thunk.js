import { apiUrl } from "../../config/constants";
import axios from "axios";
import { postNewBidSuccess } from "./slice";
import { fetchArtworkById } from "../artwork/thunk";

export const postNewBid =
  (email, amount, artworkId) => async (dispatch, getState) => {
    try {
      const userId = getState().user.profile.id;
      const token = getState().user.token;
      const response = await axios.post(
        `${apiUrl}/bids`,
        { email, amount, artworkId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(fetchArtworkById(response.data.artworkId));
    } catch (error) {
      console.log(error.message);
    }
  };
