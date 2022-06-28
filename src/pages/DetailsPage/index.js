import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworkById } from "../../store/artwork/thunk";
import { selectorArtworksDetails } from "../../store/artwork/selector";
import { Artwork, ArtworkTitle } from "../../components/Artwork";
import { useParams } from "react-router-dom";
// import { HeroBanner } from "../../components/HeroBanner";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const artworksByIdSelector = useSelector(selectorArtworksDetails);

  const { id } = useParams();

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

  const { bids } = artworksByIdSelector;

  return (
    <>
      {/* <HeroBanner> */}
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Artworks from Details page
      </h1>
      {/* </HeroBanner> */}
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
          width: "800px",
          marginTop: 0,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px",
          paddingBlockEnd: "10",
          button: "#FF4141",
        }}
      >
        <Artwork
          key={id}
          title={artworksByIdSelector.title}
          imageUrl={artworksByIdSelector.imageUrl}
          hearts={artworksByIdSelector.hearts}
        />

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
      </div>
    </>
  );
}
export { DetailsPage };
