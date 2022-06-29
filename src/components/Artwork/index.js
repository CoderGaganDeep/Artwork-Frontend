import { Link } from "react-router-dom";

const Artwork = (props) => {
  return (
    // fetching all artworks
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
        width: "500px",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "40px",
        paddingBlockEnd: "10",
        button: "#FF4141",
      }}
    >
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt="" />
      <p></p>
      <Link to={`/artworks/${props.id}`}>
        <button>See details</button>
      </Link>
      <p> </p>
      <p>
        {" "}
        ❤️:{props.hearts} 🤑 :{props.numBids}
      </p>
    </div>
  );
};
// fetching all Bids by artwork id
const ArtworkTitle = (prop) => {
  return (
    <div
      key={prop}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "1000px",
        margin: "30px auto",
        padding: "20px",
        border: "dashed red",
        borderCollapse: "collapse",
      }}
    >
      <ul style={{ listStyleType: "none" }}>
        <li>
          <table>
            <tr>
              <th>Bid</th>
              <th>Bidder</th>
            </tr>
            <tr>
              <td>{prop.amount}</td>
              <td>{prop.email}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
  );
};

export { Artwork, ArtworkTitle };
