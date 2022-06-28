// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchArtworkById, incrementHeart } from "../../store/artwork/thunk";
// import { selectorArtworksDetails } from "../../store/artwork/selector";
// import { Artwork, ArtworkTitle } from "../../components/Artwork";
// import { useParams } from "react-router-dom";
// // import { HeroBanner } from "../../components/HeroBanner";

// export default function DetailsPage() {
//   const dispatch = useDispatch();
//   const artworksByIdSelector = useSelector(selectorArtworksDetails);
//   // const [hearts, setHearts] = useState("");

//   const { id } = useParams();
//   // const handleSubmit = ((e) => setHearts(hearts(e.target.value+1)))
//   //   console.log("hearts: ", hearts); // pass the heart, and the artworkId
//   //   dispatch(incrementHeart(hearts));
//   //   setHearts("");
//   // };
//   // <button onSubmit={handleSubmit} />;
//   useEffect(() => {
//     dispatch(fetchArtworkById(id));
//   }, [dispatch, id]);

//   if (!artworksByIdSelector)
//     return (
//       <div>
//         <h3>Loading...</h3>
//       </div>
//     );

//   console.log(artworksByIdSelector);

//   // const { bids } = artworksByIdSelector;

//   return (
//     <>
//       <h1 style={{ justifyContent: "center", textAlign: "center" }}>
//         Encourage the Artist by clicking on Hearts{" "}
//         <button
//           style={{ backgroundColor: "#EEEEEE", border: "none" }}
//           type="submit"
//         >
//           ❤️:{artworksByIdSelector.hearts}
//         </button>
//       </h1>

//       <div>
//         <table
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             flexFlow: "column",
//             alignItems: "center",
//             border: "solid red",

//             borderBlockEndStyle: "outset",
//             borderBlockColor: "ActiveBorder",
//             backgroundColor: "#FE9191",
//             color: "#FFFFFF",
//             width: "800px",
//             marginTop: 0,
//             marginBottom: 0,
//             marginLeft: "auto",
//             marginRight: "auto",
//             padding: "40px",
//             paddingBlockEnd: "10",
//             button: "#FF4141",
//           }}
//         >
//           <tr>
//             <th></th>
//             <th> </th>
//             <th></th>
//           </tr>
//           <tr>
//             {" "}
//             <td></td>
//             <td>
//               {" "}
//               <Artwork
//                 key={id}
//                 title={artworksByIdSelector.title}
//                 imageUrl={artworksByIdSelector.imageUrl}
//                 hearts={artworksByIdSelector.hearts}
//                 minimumBid={artworksByIdSelector.minimumBid}
//               />
//             </td>
//             <td>
//               {" "}
//               {artworksByIdSelector.bids.map((bids) => {
//                 return (
//                   <ArtworkTitle
//                     key={bids.id}
//                     id={bids.id}
//                     email={bids.email}
//                     amount={bids.amount}
//                   />
//                 );
//               })}
//             </td>
//           </tr>
//         </table>
//       </div>
//     </>
//   );
// }
// export { DetailsPage };
