import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworkById, incrementHeart } from "../../store/artwork/thunk";
import { postNewBid } from "../../store/bid/thunk";
import { selectorArtworksDetails } from "../../store/artwork/selector";
import { selectToken, selectUser } from "../../store/user/selectors";
import { Artwork, ArtworkTitle } from "../../components/Artwork";
import { useParams } from "react-router-dom";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function DetailsPageLoggedIn() {
  const dispatch = useDispatch();
  const artworksByIdSelector = useSelector(selectorArtworksDetails);

  const [value, setValue] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const { id } = useParams();

  const incrementHearts = (hearts) => {
    incrementHeart(id, hearts);
    dispatch(fetchArtworkById(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("bid from page: ", user.email, value, id);

    let minCurrentBid = 0;

    // check no bids
    // code from : https://www.google.com/search?q=check+empty+property+javascript+if&oq=check+empty+property+javascript+if&aqs=chrome..69i57j0i22i30j0i390.16224j0j7&sourceid=chrome&ie=UTF-8
    // step 1: check if min bid is empty

    if (Object.keys(artworksByIdSelector.bids).length === 0) {
      minCurrentBid = artworksByIdSelector.minimumBid;
    } else {
      // step2: check if current bid is smaller then minBid
      artworksByIdSelector.bids.map((bid) => {
        return minCurrentBid < bid.amount
          ? (minCurrentBid = bid.amount)
          : bid.amount;
      });
    }
    // step 3 accept bid only if more than all bids
    if (value < minCurrentBid + 1) {
      setValue("");
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          "Invalid Bid, please be Highest!",
          15000
        )
      );
      return (
        <div>
          <p>Invalid Bid, please be Highest!</p>
        </div>
      );
    }
    dispatch(postNewBid(user.email, value, id));
    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "Your Bid Added Successfully!",
        15000
      )
    );
    setValue("");
  };

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  if (!artworksByIdSelector)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Encourage the Artist by clicking on Hearts{" "}
        <button
          onClick={(event) => incrementHearts(artworksByIdSelector.hearts, 1)}
          style={{ backgroundColor: "#EEEEEE", border: "none" }}
          type="submit"
        >
          ❤️:{artworksByIdSelector.hearts}
        </button>
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexFlow: "column",
          alignItems: "center",
          border: "solid red",

          borderBlockEndStyle: "outset",
          borderBlockColor: "ActiveBorder",
          backgroundColor: "#FE9191",
          color: "#FFFFFF",
          width: "80%",
          marginTop: 0,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px",
          paddingBlockEnd: "10",
          button: "#FF4141",
        }}
      >
        <table
          style={{
            backgroundColor: "#FE9191",
            color: "#FFFFFF",

            padding: "40px",
          }}
        >
          <tr>
            <td>
              {/* fetch all artwork */}
              <Artwork
                key={id}
                title={artworksByIdSelector.title}
                imageUrl={artworksByIdSelector.imageUrl}
                hearts={artworksByIdSelector.hearts}
                minimumBid={artworksByIdSelector.minimumBid}
              />
            </td>
            <td>
              {artworksByIdSelector.bids.map((bids) => {
                return (
                  // fetchs bids
                  <ArtworkTitle
                    key={bids.id}
                    id={bids.id}
                    email={bids.email}
                    amount={bids.amount}
                  />
                );
              })}
            </td>
            {/* works only if user is logged in */}
            {!token ? (
              ""
            ) : (
              <td>
                {" "}
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexFlow: "column",
                    alignItems: "center",
                    border: "solid red",

                    borderBlockEndStyle: "outset",
                    borderBlockColor: "ActiveBorder",
                    backgroundColor: "#FE9191",
                    color: "#FFFFFF",
                    width: "100%",
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "40px",
                    paddingBlockEnd: "10",
                    button: "#FF4141",
                  }}
                >
                  <h4 style={{ fontSize: "1.5rem" }}>Place Your Bid</h4>

                  <input
                    style={{ float: "right" }}
                    type="text"
                    value={value}
                    // only number input
                    onChange={(event) => setValue(Number(event.target.value))}
                  />

                  <button type="submit">Bid!</button>
                </form>
              </td>
            )}
          </tr>
        </table>
      </div>
    </>
  );
}
export { DetailsPageLoggedIn };
