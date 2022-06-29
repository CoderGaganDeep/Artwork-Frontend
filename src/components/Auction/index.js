import React, { useState } from "react";
import { newArtwork } from "../../store/auction/thunk";
import { useDispatch } from "react-redux";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function Auction() {
  const dispatch = useDispatch();
  // define attributes
  const [title, setTitle] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // output for submit
    dispatch(newArtwork(title, minimumBid, imageUrl));
    dispatch(
      showMessageWithTimeout(
        "success",
        true,
        "New Artwork Created for Auction!",
        15000
      )
    );
  };

  return (
    <div>
      {/* create Auction form */}
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
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Minimum Bid:
          <input
            type="text"
            name="minimumBid"
            value={minimumBid}
            onChange={(event) => setMinimumBid(event.target.value)}
          />
        </label>
        <label>
          ImageUrl:
          <input
            type="text"
            name="ImageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <button type="submit">Start auction!</button>
      </form>
    </div>
  );
}
export { Auction };
