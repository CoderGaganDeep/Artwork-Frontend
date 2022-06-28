import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworkById } from "../../store/artwork/thunk";
import { postNewBid } from "../../store/bid/thunk";
import { selectorArtworksDetails } from "../../store/artwork/selector";
import { selectToken, selectUser } from "../../store/user/selectors";
import { Artwork, ArtworkTitle } from "../../components/Artwork";
import { useParams } from "react-router-dom";
// import { HeroBanner } from "../../components/HeroBanner";

export default function DetailsPageLoggedIn() {
  const dispatch = useDispatch();
  const artworksByIdSelector = useSelector(selectorArtworksDetails);

  const [value, setValue] = useState("");
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("bid from page: ", user.email, value, id);

    let minCurrentBid = 0;

    // check no bids
    // code from : https://www.google.com/search?q=check+empty+property+javascript+if&oq=check+empty+property+javascript+if&aqs=chrome..69i57j0i22i30j0i390.16224j0j7&sourceid=chrome&ie=UTF-8
    if (Object.keys(artworksByIdSelector.bids).length === 0) {
      minCurrentBid = artworksByIdSelector.minimumBid;
    } else {
      artworksByIdSelector.bids.map((bid) => {
        return minCurrentBid < bid.amount
          ? (minCurrentBid = bid.amount)
          : bid.amount;
      });
    }

    if (value < minCurrentBid + 1) {
      setValue("");
      return (
        <div>
          <p>Invalid Bid, please be Highest!</p>
        </div>
      );
    }

    dispatch(postNewBid(user.email, value, id));
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

  console.log(artworksByIdSelector);

  // const { bids } = artworksByIdSelector;

  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Encourage the Artist by clicking on Hearts{" "}
        <button
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
            <th></th>
            <th> </th>
            <th></th>
          </tr>
          <tr>
            {" "}
            <td></td>
            <td>
              {" "}
              <Artwork
                key={id}
                title={artworksByIdSelector.title}
                imageUrl={artworksByIdSelector.imageUrl}
                hearts={artworksByIdSelector.hearts}
                minimumBid={artworksByIdSelector.minimumBid}
              />
            </td>
            <td>
              {" "}
              {artworksByIdSelector.bids.map((bids) => {
                return (
                  <ArtworkTitle
                    key={bids.id}
                    id={bids.id}
                    email={bids.email}
                    amount={bids.amount}
                  />
                );
              })}
            </td>
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
