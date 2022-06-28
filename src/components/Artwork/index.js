import { Link } from "react-router-dom";

const Artwork = (props) => {
  return (
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
      <p>
        {" "}
        ❤️:{props.hearts} 🤑 :{props.minimumBid}
      </p>
    </div>
  );
};
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
      }}
    >
      <table
        style={{
          padding: "20px",
          textAlign: "left",
          width: "800",
          border: "5px, solid",
        }}
      >
        <tr>
          <th>Eamil</th>
          <th> </th>
          <th>Bid</th>
        </tr>
        <tr>
          <td>{prop.email}</td>
          <td> </td>
          <td>{prop.amount}</td>
        </tr>
      </table>
    </div>
  );
};

export { Artwork, ArtworkTitle };
