import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../../store/artwork/thunk";
import { selectorArtworks } from "../../store/artwork/selector";
import { Artwork } from "../../components/Artwork";
// import { HeroBanner } from "../../components/HeroBanner";

export default function Homepage() {
  const dispatch = useDispatch();
  const artworks = useSelector(selectorArtworks);

  useEffect(() => {
    dispatch(fetchArtworks());
  }, [dispatch]);

  if (!artworks)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <>
      {/* <HeroBanner> */}
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Artworks from Home page
      </h1>
      {/* </HeroBanner> */}
      {artworks.map((artwork) => {
        return (
          <Artwork
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            imageUrl={artwork.imageUrl}
            hearts={artwork.hearts}
            minimumBid={artwork.minimumBid}
            numBids={artwork.bids.length}
            showLink={true}
          />
        );
      })}
    </>
  );
}
export { Homepage };
