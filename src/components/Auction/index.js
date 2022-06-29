import React from "react";

export default function Auction() {
  return (
    <div>
      <form
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
          <input type="text" name="name" />
        </label>
        <label>
          Minimum Bid:
          <input type="text" name="name" />
        </label>
        <label>
          ImageUrl:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Start auction" />
      </form>
    </div>
  );
}
export { Auction };
