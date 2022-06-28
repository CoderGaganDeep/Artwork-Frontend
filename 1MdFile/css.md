Header Style index file:

<h1 style={{ justifyContent: "center", textAlign: "center" }}>

Div index:

 <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "column",
        alignItems: "center",

        borderBlockEndStyle: "outset",
        borderBlockColor: "ActiveBorder",
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: "500px",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "auto",
        marginRight: "auto",
        padding: "40px",
        paddingBlockEnd: "10",
      }}
    >

App Css File:

img {
width: 350px;
/_ width: 200px; _/
float: left;
flex-direction: column-reverse;
margin-right: 10px;
}

button {
/_ background-color: lightgrey;
color: black; _/
font-size: 16px;
letter-spacing: 2px;
font-weight: 400 !important;
background-color: lightgrey;
color: black;
padding: 13px 40px;
margin: auto;
text-align: center;
display: inline-block !important;
text-decoration: none;
}
